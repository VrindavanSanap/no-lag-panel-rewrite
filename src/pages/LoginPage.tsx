import styles from "./LoginPage.module.css"
import { useState } from "react";

type login_page_props = {
  on_login: () => void;
};

function LoginPage({ on_login }: login_page_props) {
  const [username, set_username] = useState<string>("");
  const [password, set_password] = useState<string>("");
  const [error, set_error] = useState<string>("");

  const handle_login = () => {
    if (username && password) {
      console.log("Logging in with:", username, password);
      set_error(""); // Clear any previous error
      on_login();
    } else {
      const error_message = "Please enter both username and password.";
      console.log(error_message);
      set_error(error_message);
    }
  };

  return (
    <div className={styles.login_page_container}>
      <div className={styles.login_gui}>
        <h1 className={styles.heading}> Welcome back!</h1>
        <p className={styles.sub_heading}>
          Enter your Credentials to access your account
        </p>

        {error && <p className={styles.error_msg}>{error}</p>}

        <label className={styles.text_input_label} htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          className={styles.login_gui_input}
          value={username}
          onChange={(e) => set_username(e.target.value)}
        />

        <label className={styles.text_input_label} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className={styles.login_gui_input}
          value={password}
          onChange={(e) => set_password(e.target.value)}
        />
        <button className={styles.login_btn} onClick={handle_login}>Login</button>
      </div>

      <div className={styles.login_page_image}></div>
    </div>
  );
}

export default LoginPage;