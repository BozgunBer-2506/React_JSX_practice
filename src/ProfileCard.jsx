function ProfileCard() {
  // Daten für das Profil
  const user = {
    name: "Özgün",
    role: "Frontend Developer",
    skills: ["React", "JavaScript", "Vite"],
    isAvailable: true
  };

  return (
    <div className="profile-card" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <h2>{user.name}</h2>
      <p>Rolle: {user.role}</p>
      
      {/* Statusanzeige mit Ternary Operator */}
      <p>Status: {user.isAvailable ? "✅ Verfügbar" : "❌ Beschäftigt"}</p>

      <h3>Skills:</h3>
      <ul>
        {/* Mapping durch das Skills-Array */}
        {user.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;