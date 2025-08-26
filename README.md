# React + Axios Auth (Access & Refresh Tokens)

This project demonstrates a **minimal authentication setup** using:

* **JWT Access Tokens** (short-lived)
* **Refresh Tokens** (httpOnly cookie)
* **Axios interceptors** (automatic token attach & refresh)
* **Route protection** with `react-router-dom`

The goal is to show the **algorithm/pattern** of handling tokens on the frontend with React and Axios.
For production apps, you should combine this with a proper **state management library** (Context API, Redux, Zustand, etc.) and add more security hardening.

---

## 🔑 Algorithm

1. **Login**

   * User submits credentials (`/auth`).
   * Backend responds with:

     * **Access Token** (JWT) in JSON response.
     * **Refresh Token** in **httpOnly cookie**.
   * Client stores the access token in **memory** (not localStorage/sessionStorage, so it resets on refresh).

2. **Authenticated Requests**

   * Axios interceptor attaches `Authorization: Bearer <token>` to every request.

3. **Token Expiry**

   * If the API responds with `401 Unauthorized` or `403 Forbidden`:

     * Axios tries **once** to refresh the token (`/refresh`).
     * Backend verifies refresh token (from cookie) and issues a **new access token**.
     * Axios retries the original request with the new token.

4. **Logout**

   * Client calls `/logout`.
   * Backend clears refresh token cookie.
   * Client clears access token from memory and redirects to `/login`.

---

## 🖥 Backend Expectations

For this minimal flow, your backend should have:

* **POST `/auth`**

  * Input: `{ user, pwd }`
  * Response: `{ accessToken }`
  * Set refresh token in **httpOnly cookie**.

* **GET `/refresh`**

  * Input: refresh token from cookie.
  * Response: `{ accessToken }`

* **POST `/logout`** (recommended; could also be GET)

  * Clears refresh token cookie.

⚠️ **Important:**

* Access tokens should be short-lived (e.g. 5–15 minutes).
* Refresh tokens should be long-lived but revocable.
* Always store refresh tokens securely on the server (DB/Redis).

---

## 🚀 How to Use

1. Clone repo and install deps:

   ```bash
   npm install
   ```

2. Start dev server:

   ```bash
   npm run dev
   ```

3. Update `API_BASE_URL` in [`baseConfig.ts`](./src/api/baseConfig.ts) to match your backend.

4. Adjust API endpoints in [`authApi.ts`](./src/api/authApi.ts) if your backend uses different paths.

5. Navigate to a protected route:

   * If not logged in → you’ll be redirected to `/login`.
   * After login → you’ll have access until token expires.
   * Token refresh happens silently in the background.

---

## 🛠 Tech Used

* [React](https://react.dev/)
* [React Router DOM](https://reactrouter.com/)
* [Axios](https://axios-http.com/)

---

## ⚠️ Notes

* This demo **only depends on Axios** for auth logic.
* It does not persist access tokens (refresh resets session).
* In production:

  * Use proper state management.
  * Handle roles/permissions.
  * Add CSRF protection.
  * Use HTTPS in deployment.

---
