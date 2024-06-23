import { css } from "#styled-system/css"
import { flex, grid } from "#styled-system/patterns"

import { button } from "#styles/button"

import { loginWithPasswordFormDataAction, signUpWithPasswordFormDataAction } from "#supabase/actions"

export default function LoginPage() {
  return (
    <form className={grid({ gap: 2, borderWidth: 4, mx: "auto", my: 8, maxW: "520px", p: 8, rounded: "lg" })}>
      <label htmlFor="email" className={grid({ gap: 1 })}>
        Email:
        <input
          id="email"
          name="email"
          type="email"
          required
          className={css({ borderWidth: 3, px: 3, py: 2, rounded: "md" })}
        />
      </label>
      <label htmlFor="password" className={grid({ gap: 1 })}>
        Password:
        <input
          id="password"
          name="password"
          type="password"
          required
          className={css({ borderWidth: 3, px: 3, py: 2, rounded: "md" })}
        />
      </label>
      <div className={flex({ gap: 2, justifyContent: "end" })}>
        <button className={button({ variant: "secondary" })} formAction={loginWithPasswordFormDataAction}>
          Log in
        </button>
        <button className={button({ variant: "primary" })} formAction={signUpWithPasswordFormDataAction}>
          Sign up
        </button>
      </div>
    </form>
  )
}
