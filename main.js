document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    const status = document.querySelector('#formStatus');

    if (!data.name || !data.phone || !data.message) {
      status.textContent = 'Please fill in name, phone and message.';
      return;
    }

    // Static/Vercel-safe enquiry action: opens the user's email client.
    const subject = encodeURIComponent(`Black Dragon Enquiry - ${data.type || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || 'Not provided'}\nType: ${data.type || 'General'}\n\nMessage:\n${data.message}`
    );

    window.location.href = `mailto:hello@blackdragon.in?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email app to send the enquiry...';
  });
});
