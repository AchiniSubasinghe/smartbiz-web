export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>Welcome, {user.fullName}</h2>
      <p>Role: {user.role}</p>
    </div>
  );
}
