function Greeting() {
  const stunde = new Date().getHours();
  let nachricht = "";

  if (stunde < 12) nachricht = "Guten Morgen";
  else if (stunde < 18) nachricht = "Guten Tag";
  else nachricht = "Guten Abend";

  return (
    <div className="greeting-box" style={{ 
      borderLeft: '5px solid #646cff', 
      paddingLeft: '15px', 
      margin: '20px 0' 
    }}>
      <h2>{nachricht}, Baris Özgün!</h2>
      <p>Willkommen zu meiner ersten React-Komponente.</p>
    </div>
  );
}

export default Greeting;