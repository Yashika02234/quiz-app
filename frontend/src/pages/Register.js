// Register.js
const Register = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    );
  };
  
  export default Register;