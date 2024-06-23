"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

import { createClient } from "#supabase/server"

export async function loginWithPasswordFormDataAction(formData: FormData) {
  const supabase = createClient()

  const data = z
    .object({
      email: z.string(),
      password: z.string(),
    })
    .parse(Object.fromEntries(formData))

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error != null) {
    throw error
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export async function signUpWithPasswordFormDataAction(formData: FormData) {
  const supabase = createClient()

  const data = z
    .object({
      email: z.string(),
      password: z.string(),
    })
    .parse(Object.fromEntries(formData))

  const { error } = await supabase.auth.signUp(data)

  if (error != null) {
    throw error
  }

  revalidatePath("/", "layout")
  redirect("/")
}
