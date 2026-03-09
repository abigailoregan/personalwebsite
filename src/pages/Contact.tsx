import { useEffect, useRef } from "react"
import "../css/Contact.css"

function Contact() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const autoResize = () => {
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + "px"
    }

    textarea.addEventListener("input", autoResize)
    autoResize()

    return () => textarea.removeEventListener("input", autoResize)
  }, [])

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    const handleSubmit = (e: Event) => {
      const captcha = form.querySelector(
        'textarea[name="h-captcha-response"]'
      ) as HTMLTextAreaElement | null

      if (!captcha || !captcha.value) {
        e.preventDefault()
        alert("Please fill out captcha field")
      }
    }

    form.addEventListener("submit", handleSubmit)

    return () => form.removeEventListener("submit", handleSubmit)
  }, [])

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1 className="contact-title">Get in touch!</h1>

        <p className="contact-subtitle">
          I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
        </p>

        <form
          ref={formRef}
          id="emailform"
          autoComplete="off"
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="access_key"
            value="66a5c3aa-cd83-40bc-853c-00e1c2d276ad"
          />

          <input
            type="text"
            name="name"
            placeholder="Type your name..."
            required
            className="contact-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Type your email..."
            required
            className="contact-input"
          />

          <input
            type="text"
            name="subject"
            placeholder="Type your subject..."
            required
            className="contact-input"
          />

          <textarea
            ref={textareaRef}
            id="textbox"
            name="message"
            placeholder="Type your message..."
            required
            className="contact-textarea"
          />

          {/* Honeypot */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          {/* hCaptcha */}
          <div className="h-captcha" data-captcha="true"></div>

          <button type="submit" className="contact-submit">Send Message</button>
        </form>
      </div>
      {/* Web3Forms Script */}
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  )
}

export default Contact