const moods = {
  book: "答案之书",
  general: "通用",
  action: "行动",
  wait: "等待",
  comfort: "安慰",
  love: "感情",
  playful: "搞怪",
};

async function api(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: {
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "请求失败");
  return data;
}

function formatDate(value) {
  return value ? new Date(value).toLocaleString("zh-CN") : "";
}

function renderAnswers(answers) {
  document.querySelector("#answerCount").textContent = `${answers.length} 条`;
  document.querySelector("#answersList").innerHTML = answers
    .map(
      (answer) => `
        <article class="admin-item" data-id="${answer.id}">
          <div class="admin-item-main">
            <input value="${escapeHtml(answer.text)}" maxlength="140" data-field="text" />
            <select data-field="mood">
              ${Object.entries(moods)
                .map(([value, label]) => `<option value="${value}" ${answer.mood === value ? "selected" : ""}>${label}</option>`)
                .join("")}
            </select>
            <p class="admin-meta">${answer.active ? "启用中" : "已停用"} · ${formatDate(answer.created_at)}</p>
          </div>
          <div class="admin-actions">
            <button data-action="save" type="button">保存</button>
            <button class="danger" data-action="delete" type="button">删除</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderUsers(users) {
  document.querySelector("#userCount").textContent = `${users.length} 位`;
  document.querySelector("#usersList").innerHTML = users
    .map(
      (user) => `
        <article class="admin-item admin-user-item" data-id="${user.id}">
          <div class="admin-item-main">
            <p class="admin-user-line">${renderAvatar(user.avatar)} ${escapeHtml(user.nickname || "某只猪")}</p>
            <div class="admin-user-grid">
              <label>
                手机号
                <input value="${escapeAttribute(user.phone)}" maxlength="24" data-field="phone" />
              </label>
              <label>
                昵称
                <input value="${escapeAttribute(user.nickname || "某只猪")}" maxlength="18" data-field="nickname" />
              </label>
              <label>
                头像
                <input value="${escapeAttribute(user.avatar || "🐷")}" maxlength="220000" data-field="avatar" />
              </label>
              <label>
                重置密码
                <input type="password" placeholder="不修改就留空" minlength="6" data-field="password" />
              </label>
            </div>
            <label class="admin-check">
              <input type="checkbox" data-field="isAdmin" ${user.isAdmin ? "checked" : ""} />
              管理员
            </label>
            <p class="admin-meta">${user.isAdmin ? "管理员" : "普通用户"} · ${formatDate(user.created_at)}</p>
          </div>
          <div class="admin-actions">
            <button data-action="save-user" type="button">保存</button>
            <button class="danger" data-action="delete-user" type="button">删除</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderLogs(logs) {
  document.querySelector("#logsList").innerHTML = logs
    .map(
      (log) => `
        <article class="admin-item">
          <div class="admin-item-main">
            <p><strong>问：</strong>${escapeHtml(log.question)}</p>
            <p><strong>答：</strong>${escapeHtml(log.answer_text)}</p>
            <p class="admin-meta">${escapeHtml(log.app_users?.nickname || "某只猪")} · ${escapeHtml(log.mood || "")} · ${formatDate(log.created_at)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFeedback(feedback) {
  document.querySelector("#feedbackList").innerHTML = feedback
    .map(
      (item) => `
        <article class="admin-item">
          <div class="admin-item-main">
            <p>${escapeHtml(item.message)}</p>
            <p class="admin-meta">${escapeHtml(item.app_users?.nickname || "某只猪")} · ${formatDate(item.created_at)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderAvatar(value) {
  const avatar = String(value || "🐷");
  if (avatar.startsWith("data:image/")) {
    return `<span class="admin-avatar" style="background-image: url('${escapeAttribute(avatar)}')"></span>`;
  }
  return `<span class="admin-avatar">${escapeHtml(avatar)}</span>`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

async function loadAdmin() {
  const me = await api("./api/auth-me");
  if (!me.user?.isAdmin) {
    document.querySelector("#adminGate").hidden = false;
    document.querySelector("#adminApp").hidden = true;
    return;
  }

  document.querySelector("#adminGate").hidden = true;
  document.querySelector("#adminApp").hidden = false;
  const [answers, users, logs, feedback] = await Promise.all([
    api("./api/admin-answers"),
    api("./api/admin-users"),
    api("./api/admin-logs"),
    api("./api/admin-feedback"),
  ]);
  renderAnswers(answers.answers || []);
  renderUsers(users.users || []);
  renderLogs(logs.logs || []);
  renderFeedback(feedback.feedback || []);
}

document.querySelectorAll("[data-admin-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-admin-tab]").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll("[data-admin-view]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`[data-admin-view="${button.dataset.adminTab}"]`).classList.add("active");
  });
});

document.querySelector("#answerForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = document.querySelector("#answerText");
  const mood = document.querySelector("#answerMood");
  await api("./api/admin-answers", {
    method: "POST",
    body: JSON.stringify({ text: text.value, mood: mood.value }),
  });
  text.value = "";
  await loadAdmin();
});

document.querySelector("#answersList").addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  const item = event.target.closest(".admin-item");
  if (!button || !item) return;

  const id = item.dataset.id;
  if (button.dataset.action === "delete") {
    if (!confirm("确定删除这条签文吗？")) return;
    await api("./api/admin-answers", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    await loadAdmin();
    return;
  }

  await api("./api/admin-answers", {
    method: "PATCH",
    body: JSON.stringify({
      id,
      text: item.querySelector('[data-field="text"]').value,
      mood: item.querySelector('[data-field="mood"]').value,
    }),
  });
  await loadAdmin();
});

document.querySelector("#usersList").addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  const item = event.target.closest(".admin-item");
  if (!button || !item) return;

  const id = item.dataset.id;
  if (button.dataset.action === "delete-user") {
    if (!confirm("确定删除这个用户吗？她的登录、收藏会一起删除。")) return;
    await api("./api/admin-users", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    await loadAdmin();
    return;
  }

  await api("./api/admin-users", {
    method: "PATCH",
    body: JSON.stringify({
      id,
      phone: item.querySelector('[data-field="phone"]').value,
      nickname: item.querySelector('[data-field="nickname"]').value,
      avatar: item.querySelector('[data-field="avatar"]').value,
      password: item.querySelector('[data-field="password"]').value,
      isAdmin: item.querySelector('[data-field="isAdmin"]').checked,
    }),
  });
  await loadAdmin();
});

loadAdmin().catch((error) => {
  document.querySelector("#adminGate").hidden = false;
  document.querySelector("#adminGate").innerHTML = `<h2>后台暂时进不去</h2><p>${escapeHtml(error.message)}</p>`;
});
