// Telegram notification helper — website alerts to Jason
// Env vars (add to Vercel rd-website project):
//   TELEGRAM_BOT_TOKEN  — bot token
//   TELEGRAM_CHAT_ID    — Jason's chat ID
//   TELEGRAM_TOPIC_ID   — optional: message thread ID

export async function sendTelegramAlert(
  message: string,
  topicId?: string | number
): Promise<void> {
  const token  = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  const topic  = topicId ?? process.env.TELEGRAM_TOPIC_ID

  if (!token || !chatId) return // graceful no-op

  const body: Record<string, unknown> = {
    chat_id: chatId,
    text: message,
    parse_mode: 'Markdown',
    disable_web_page_preview: true,
  }
  if (topic) body.message_thread_id = Number(topic)

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(4000),
    })
  } catch {
    // non-blocking — never fail the request because of Telegram
  }
}
