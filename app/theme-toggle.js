import { cookies } from "next/headers";

export default function ThemeToggle({ theme }) {
  async function toggleTheme() {
    "use server";

    const cookieStore = await cookies();
    const nextTheme = theme === "dark" ? "light" : "dark";
    cookieStore.set("theme", nextTheme, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return (
    <form action={toggleTheme}>
      <button className="button-secondary" type="submit">
        {theme === "dark" ? "Lys modus" : "Mork modus"}
      </button>
    </form>
  );
}
