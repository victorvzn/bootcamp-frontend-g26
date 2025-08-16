const LoginPage = () => {
  return (
    <main className="w-[400px] m-auto flex flex-col gap-5">
      <div className="bg-slate-600 p-8 rounded-lg flex flex-col gap-6">
        <h2 className="text-white text-center text-4xl font-bold">Invoice app</h2>

        <p className="text-white font-light text-center">Ingresa un nombre de usuario y password</p>

        <form>
          <label className="text-white flex flex-col gap-2 mb-4">
            <span>Username</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-slate-800"
              type="text"
              name="username"
              placeholder="jhondo@login.com"
            />
          </label>
          <label className="text-white flex flex-col gap-2 mb-4">
            <span>Password</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-slate-800"
              type="password"
              name="password"
              placeholder="***************"
            />
          </label>
          <button
            type="submit"
            className="rounded-full px-5 py-4 font-semibold min-w-[100px] w-full bg-blue-500 hover:bg-blue-600 duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  )
}

export default LoginPage