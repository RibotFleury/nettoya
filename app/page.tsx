"use client";
import { useState, useEffect } from "react";

const WHATSAPP = "237656220521";

function buildWALink(data: Record<string, string>) {
  const msg = `Bonjour Nettoya ! 🌿\n\nJe souhaite obtenir un devis.\n\n*Nom :* ${data.nom}\n*Téléphone :* ${data.tel}\n*Service :* ${data.service}\n*Description :* ${data.description}\n*Surface :* ${data.surface || "Non précisée"}\n\nMerci !`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

export default function Home() {
  const [form, setForm] = useState({ nom: "", tel: "", service: "", surface: "", description: "" });
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const handleSubmit = () => {
    if (!form.nom || !form.tel || !form.service || !form.description) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    window.open(buildWALink(form), "_blank");
  };

  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8faf8", color: "#1a1a1a" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,250,248,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid #e0ede6", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ position: "relative", width: 36, height: 36 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 22, height: 22, background: "#1B6B3A", borderRadius: 3 }} />
            <div style={{ position: "absolute", top: 8, left: 8, width: 22, height: 22, background: "#52B788", borderRadius: 3 }} />
            <div style={{ position: "absolute", top: 13, left: 13, width: 10, height: 10, background: "#f8faf8", borderRadius: 2 }} />
          </div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "#1B6B3A", letterSpacing: 1 }}>NETTOYA</span>
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Services", "Tarifs", "Devis", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: 14, fontWeight: 500, color: "#444", textDecoration: "none" }}>{item}</a>
          ))}
          <a href="#devis" style={{ background: "#1B6B3A", color: "#fff", padding: "8px 20px", borderRadius: 6, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Demander un devis</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 64, background: "linear-gradient(135deg, #f0faf4 0%, #e8f5ee 60%, #d4edde 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "#52B788", borderRadius: "50%", opacity: 0.08 }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, background: "#1B6B3A", borderRadius: "50%", opacity: 0.06 }} />
        <div style={{ textAlign: "center", maxWidth: 760, padding: "0 24px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-block", background: "#dcf0e5", color: "#1B6B3A", fontSize: 13, fontWeight: 500, padding: "6px 16px", borderRadius: 20, marginBottom: 24, letterSpacing: 1 }}>🌿 Nettoyage professionnel à Douala</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px, 7vw, 72px)", fontWeight: 700, color: "#1B6B3A", lineHeight: 1.1, marginBottom: 24 }}>
            La propreté,<br /><span style={{ color: "#52B788" }}>notre passion.</span>
          </h1>
          <p style={{ fontSize: 18, color: "#555", lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
            Nettoya intervient chez les particuliers, les écoles professionnelles et sur vos chantiers terminés. Un service fiable, soigné et professionnel.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#devis" style={{ background: "#1B6B3A", color: "#fff", padding: "14px 32px", borderRadius: 8, fontSize: 16, fontWeight: 600, textDecoration: "none" }}>Obtenir un devis gratuit</a>
            <a href="#services" style={{ background: "transparent", color: "#1B6B3A", padding: "14px 32px", borderRadius: 8, fontSize: 16, fontWeight: 500, textDecoration: "none", border: "1.5px solid #1B6B3A" }}>Nos services</a>
          </div>
          <div style={{ display: "flex", gap: 40, justifyContent: "center", marginTop: 56 }}>
            {[["100%", "Clients satisfaits"], ["3", "Types de services"], ["Douala", "Zone d'intervention"]].map(([val, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#1B6B3A" }}>{val}</div>
                <div style={{ fontSize: 13, color: "#777", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "96px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ color: "#52B788", fontWeight: 600, letterSpacing: 2, fontSize: 13, textTransform: "uppercase", marginBottom: 12 }}>Ce que nous faisons</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#1B6B3A", marginBottom: 16 }}>Nos services</h2>
          <p style={{ color: "#666", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>Des prestations adaptées à chaque besoin, avec le même niveau d'exigence.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {[
            { emoji: "🏠", title: "Ménages", desc: "Nettoyage complet de votre domicile — salon, chambres, cuisine, sanitaires. Nous nous déplaçons à votre convenance.", color: "#e8f5ee" },
            { emoji: "🏫", title: "Écoles professionnelles", desc: "Contrats mensuels pour maintenir vos locaux impeccables. Salles, couloirs, sanitaires, bureaux — tout est pris en charge.", color: "#dcf0e5" },
            { emoji: "🏗️", title: "Chantiers terminés", desc: "Nettoyage post-construction soigné pour remettre votre bâtisse à neuf avant livraison ou emménagement.", color: "#d0eada" },
          ].map(s => (
            <div key={s.title} style={{ background: s.color, borderRadius: 16, padding: 36, border: "1px solid #c8e6d0" }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>{s.emoji}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#1B6B3A", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
              <a href="#devis" style={{ color: "#1B6B3A", fontWeight: 600, fontSize: 14, textDecoration: "none", borderBottom: "1.5px solid #52B788", paddingBottom: 2 }}>Demander un devis →</a>
            </div>
          ))}
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" style={{ background: "#1B6B3A", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: "#52B788", fontWeight: 600, letterSpacing: 2, fontSize: 13, textTransform: "uppercase", marginBottom: 12 }}>Tarification transparente</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#fff", marginBottom: 16 }}>Nos tarifs</h2>
            <p style={{ color: "#a8d5bc", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>Des prix clairs et accessibles, sans mauvaise surprise.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { title: "Ménages", items: [["Essentiel (salon + cuisine + 1 SDB)", "15 000 FCFA"], ["Confort (2–3 pièces)", "25 000 FCFA"], ["Premium (villa 4 pièces+)", "45 000 FCFA"], ["Grand ménage approfondi", "+10 000 FCFA"]] },
              { title: "Écoles", items: [["Petite école (–5 salles)", "80 000 – 120 000 FCFA/mois"], ["École moyenne (5–10 salles)", "150 000 – 250 000 FCFA/mois"], ["Grande école / campus", "300 000 – 500 000 FCFA/mois"], ["Contrat annuel", "1 mois offert"]] },
              { title: "Chantiers (au m²)", items: [["Nettoyage standard", "500 – 800 FCFA/m²"], ["Nettoyage approfondi", "800 – 1 200 FCFA/m²"], ["Résidence haut standing", "1 200 – 2 000 FCFA/m²"], ["Visite préalable", "Gratuite"]] },
            ].map(t => (
              <div key={t.title} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 32, border: "1px solid rgba(255,255,255,0.12)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#fff", marginBottom: 24 }}>{t.title}</h3>
                {t.items.map(([label, price]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.08)", gap: 12 }}>
                    <span style={{ color: "#c8e6d4", fontSize: 14, flex: 1 }}>{label}</span>
                    <span style={{ color: "#52B788", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>{price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section id="devis" style={{ padding: "96px 24px", maxWidth: 680, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: "#52B788", fontWeight: 600, letterSpacing: 2, fontSize: 13, textTransform: "uppercase", marginBottom: 12 }}>Rapide et gratuit</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#1B6B3A", marginBottom: 16 }}>Demandez un devis</h2>
          <p style={{ color: "#666", fontSize: 16 }}>Remplissez le formulaire — vous serez redirigé vers WhatsApp pour finaliser votre demande.</p>
        </div>
        <div style={{ background: "#fff", borderRadius: 20, padding: 40, boxShadow: "0 4px 40px rgba(27,107,58,0.08)", border: "1px solid #e0ede6" }}>
          {[
            { label: "Nom complet *", key: "nom", type: "text", placeholder: "Votre nom" },
            { label: "Téléphone / WhatsApp *", key: "tel", type: "tel", placeholder: "+237 6XX XX XX XX" },
          ].map(f => (
            <div key={f.key} style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 6 }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} value={form[f.key as keyof typeof form]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #d0e8d8", fontSize: 15, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
            </div>
          ))}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 6 }}>Type de service *</label>
            <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
              style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #d0e8d8", fontSize: 15, outline: "none", background: "#fff", fontFamily: "inherit" }}>
              <option value="">Sélectionner un service</option>
              <option>Ménage — Essentiel</option>
              <option>Ménage — Confort</option>
              <option>Ménage — Premium</option>
              <option>École professionnelle</option>
              <option>Chantier terminé</option>
            </select>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 6 }}>Surface approximative (m²)</label>
            <input type="text" placeholder="Ex: 80 m²" value={form.surface}
              onChange={e => setForm({ ...form, surface: e.target.value })}
              style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #d0e8d8", fontSize: 15, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }} />
          </div>
          <div style={{ marginBottom: 28 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#333", marginBottom: 6 }}>Description *</label>
            <textarea placeholder="Décrivez brièvement votre besoin..." value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })} rows={4}
              style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1.5px solid #d0e8d8", fontSize: 15, outline: "none", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }} />
          </div>
          <button onClick={handleSubmit}
            style={{ width: "100%", background: "#1B6B3A", color: "#fff", padding: "16px", borderRadius: 10, fontSize: 16, fontWeight: 600, border: "none", cursor: "pointer" }}>
            💬 Envoyer via WhatsApp
          </button>
          <p style={{ textAlign: "center", fontSize: 13, color: "#999", marginTop: 12 }}>Vous serez redirigé vers WhatsApp avec votre demande pré-remplie.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#f0faf4", padding: "72px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: "#1B6B3A", marginBottom: 16 }}>Nous contacter</h2>
          <p style={{ color: "#666", fontSize: 16, marginBottom: 40 }}>Disponibles du lundi au samedi, de 7h à 18h.</p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { icon: "📍", label: "Localisation", val: "Douala, Cameroun" },
              { icon: "💬", label: "WhatsApp", val: "+237 656 220 521" },
              { icon: "📧", label: "Email", val: "contact@nettoya.com" },
            ].map(c => (
              <div key={c.label} style={{ background: "#fff", borderRadius: 16, padding: "28px 32px", border: "1px solid #c8e6d0", minWidth: 200 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 6, fontWeight: 500 }}>{c.label}</div>
                <div style={{ fontSize: 15, color: "#1B6B3A", fontWeight: 600 }}>{c.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1B6B3A", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ position: "relative", width: 28, height: 28 }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 16, height: 16, background: "#fff", borderRadius: 2, opacity: 0.9 }} />
            <div style={{ position: "absolute", top: 6, left: 6, width: 16, height: 16, background: "#52B788", borderRadius: 2 }} />
            <div style={{ position: "absolute", top: 10, left: 10, width: 8, height: 8, background: "#1B6B3A", borderRadius: 1 }} />
          </div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: 1 }}>NETTOYA</span>
        </div>
        <p style={{ color: "#a8d5bc", fontSize: 13 }}>La propreté, notre passion · Douala, Cameroun</p>
        <p style={{ color: "#6aab86", fontSize: 12, marginTop: 8 }}>© 2025 Nettoya. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
