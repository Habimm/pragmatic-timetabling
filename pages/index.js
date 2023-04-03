import Head from 'next/head';
import Header from '@components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pragmatic Timetabling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <img src="/logo.png" alt="Pragmatic Timetabling Logo" width="652" height="86" />
              <br />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Revolutionieren Sie die Stundenplanerstellung mit unserer innovativen Software! 🚀</p>

              <p>Introducing: Pragmatic Timetabling – die ultimative Lösung für die Erstellung von Stundenplänen für Ihre Oberstufe, Mittelstufe und Unterstufe.</p>

              <ul>
                <li>🖥️ Web-basiert: Keine Installation erforderlich, einfach im Browser nutzen</li>
                <li>👩‍🏫 Lehrer-Management: Definieren Sie Lehrer mit Namen und Liste der unterrichteten Fächer</li>
                <li>👨‍🎓 Schüler-Management: Definieren Sie Schüler und deren Wahlfächer</li>
                <li>🏫 Raum-Management: Definieren Sie Räume mit verfügbaren Zeiten und Eigenschaften (z.B. mit Computer oder ohne Computer)</li>
                <li>🔮 Automatische Berechnung: Erstellen Sie alle Stundenpläne (für Schüler, Lehrer, Räume) per Knopfdruck</li>
                <li>✏️ Manuelle Anpassungen: Wählen Sie Raum, Lehrer oder Schüler aus und passen Sie den Stundenplan individuell an</li>
                <li>📤 Export: Stundenpläne können nach Excel oder PDF exportiert werden</li>
              </ul>

              <p>Haben wir Ihr Interesse geweckt? Helfen Sie uns, die Entwicklung der Pragmatic Timetabling Software zu beschleunigen, indem Sie Ihre E-Mail-Adresse hinterlassen. So halten wir Sie auf dem Laufenden und informieren Sie, sobald die Software verfügbar ist.</p>

              <p>Geben Sie Ihre E-Mail-Adresse in das unten stehende Feld ein und schicken das Formular ab, und werden Sie Teil der Pragmatic Timetabling Revolution! 🌐</p>
            </div>
          </div>
<form action="https://formsubmit.co/30d7723477fe072ad2d0a1be80d15cfa" method="POST" className="email-form">
  <div className="form-group">
    <label htmlFor="email">E-Mail-Adresse:</label>
    <input type="email" name="email" id="email" className="form-control" required />
  </div>
  <div className="submit-button-container">
    <button type="submit" className="btn btn-primary">Informiert mich!</button>
  </div>
  <style jsx>{`
    .submit-button-container {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
  `}</style>
</form>

        </div>
      </main>
    </div>
  );
}
