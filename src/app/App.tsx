import React, { Suspense, useEffect, useState } from "react";
import "./styles/index.scss";
import styles from "./App.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const firstName = formData.get("firstName");
    
    if (typeof firstName === 'string') {
      setUserFirstName(firstName);
    }
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.mainContent} id="Main-Content">
        <h2>Congratulations, {userFirstName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>
        <p className={styles.finePrint}>
          We'll never share your information without your permission
        </p>
      </div>
    );
  }

  return (
    <div className={classNames("app", {}, [])}>
     
        <div className={styles.container}>
          {/* Intro Section */}
          <div className={styles.intro}>
            <div className={styles.introInner}>
              <h1>Become a BBQ master!</h1>
              <p>Register Today</p>
            </div>
          </div>

          {/* Main Content */}
          <div className={styles.mainContent} id="Main-Content">
            <h2>Become a BBQ master!</h2>
            <p>Register Today</p>

            <p>
              BBQ isn't just standing in front of your grill with it on full
              blast and hoping for the best. It's an art! One way to speed up
              the process is to learn from the best. Learn how to make{" "}
              <strong>the best BBQ ribs</strong> in town!
            </p>

            <p>Join us for this live webinar</p>

            <p className={styles.topText}>Mouthwateringly delicious</p>
            <p>You can do just that by signing up for this free webinar!</p>

            <form
              id="Email-Collector"
              className={styles.emailCollector}
              onSubmit={handleSubmit}
            >
              <input
                name="firstName"
                type="text"
                required
                placeholder="First Name"
              />
              <input
                name="emailAdress"
                type="email"
                required
                placeholder="Email"
              />
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                type="submit"
              >
                Register
              </button>
            </form>

            <p className={styles.finePrint}>
              We'll never share your information without your permission
            </p>
          </div>
        </div>
 
    </div>
  );
}

export default App;
