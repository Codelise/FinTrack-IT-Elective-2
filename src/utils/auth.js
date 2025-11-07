import { supabase } from "@/lib/supabase";

const session_timeout = 24 * 60 * 60 * 1000; // 24 hrs timeout
const idle_timeout = 30 * 60 * 1000; // 30 mins

export class AuthManager {
  static async getSession() {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    if (error) throw error;
    return session;
  }

  static async refreshSession() {
    const {
      data: { session },
      error,
    } = await supabase.auth.refreshSession();
    if (error) throw error;
    return session;
  }

  static setupAutoRefresh() {
    setInterval(async () => {
      try {
        await this.refreshSession();
      } catch (error) {
        console.error("Session refresh failed: ", error);
        await this.signOut();
      }
    }, 15 * 60 * 1000);
  }

  static setupIdleDetection() {
    let idleTimer;
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        this.signOut();
      }, idle_timeout);
    };

    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
    ];
    events.forEach((event) => {
      document.addEventListener(event, resetIdleTimer, { passive: true });
    });
    resetIdleTimer();
  }
}
