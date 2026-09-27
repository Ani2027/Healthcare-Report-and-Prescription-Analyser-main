import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Footer } from '../components/Footer';

const ContactDetail = ({ icon, title, content, href }) => {
  const IconComponent = icon;
  return (
    <div className="flex items-start gap-4">
      <div
        className="shrink-0 p-3 rounded-xl"
        style={{
          background: 'rgba(14, 165, 233, 0.1)',
          border: '1px solid rgba(14, 165, 233, 0.2)',
        }}
      >
        <IconComponent size={20} className="text-sky-400" />
      </div>
      <div>
        <p className="font-semibold text-sm mb-1" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </p>
        {href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-sm transition-colors hover:text-sky-400 hover:underline block"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {content}
          </a>
        ) : (
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      const success = true;
      setSubmissionStatus(success ? 'success' : 'error');
      if (success) setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const mapQuery = "UIET+Panjab+University+Sector+25+Chandigarh";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-heading mb-4">
            Get In Touch
          </h1>
          <p className="section-subheading">
            We're here to help you understand your health better
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'var(--gradient-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <h2
                className="text-xl font-bold mb-6 tracking-tight"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field w-full px-4 py-3 rounded-xl text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field w-full px-4 py-3 rounded-xl text-sm"
                    placeholder="anshdeep0211@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-field w-full px-4 py-3 rounded-xl text-sm resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {submissionStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl"
                    style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                    }}
                  >
                    <CheckCircle size={18} className="text-green-400" />
                    <span className="text-sm text-green-400 font-medium">
                      Thank you! Your message has been sent successfully.
                    </span>
                  </motion.div>
                )}

                {submissionStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl"
                    style={{
                      background: 'rgba(244, 63, 94, 0.1)',
                      border: '1px solid rgba(244, 63, 94, 0.2)',
                    }}
                  >
                    <AlertCircle size={18} className="text-rose-400" />
                    <span className="text-sm text-rose-400 font-medium">
                      Error sending message. Please try again later.
                    </span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div
              className="p-8 rounded-2xl space-y-6"
              style={{
                background: 'var(--gradient-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <h2
                className="text-xl font-bold mb-6 tracking-tight"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Contact Info
              </h2>

              <div className="space-y-6">
                <ContactDetail
                  icon={Mail}
                  title="Email"
                  content="anshdeep0211@gmail.com"
                  href="mailto:anshdeep0211@gmail.com"
                />
                <ContactDetail
                  icon={Phone}
                  title="Phone"
                  content="+91 9877526403"
                  href="tel:+919877526403"
                />
                <ContactDetail
                  icon={MapPin}
                  title="Campus Address"
                  content="UIET, Sector 25, South Campus, Panjab University, Chandigarh, 160014"
                  href={mapsUrl}
                />
              </div>

              <div className="pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Our team at UIET Panjab University typically responds within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div
            className="p-6 rounded-2xl"
            style={{
              background: 'var(--gradient-card)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2
                  className="text-xl font-bold tracking-tight"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Our Location
                </h2>
                <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                  University Institute of Engineering & Technology (UIET), Panjab University, Chandigarh
                </p>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 text-sm px-4 py-2 self-start md:self-auto"
              >
                <MapPin size={16} className="text-sky-400" />
                View on Google Maps
              </a>
            </div>

            <div className="w-full h-80 rounded-xl overflow-hidden border" style={{ borderColor: 'var(--color-border)' }}>
              <iframe
                title="UIET Chandigarh Panjab University Map"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
