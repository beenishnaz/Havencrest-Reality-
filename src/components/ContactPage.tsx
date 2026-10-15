import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, ShieldCheck, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Property Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#FCFBF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] text-[#C6A36A] uppercase block mb-2">
            Connect With Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#10233B] tracking-tight mb-3">
            Let’s Discuss Your Next Move.
          </h1>
          <p className="text-sm sm:text-base text-[#6C7785]">
            Our advisors provide discreet, personalized guidance for buyers, sellers, and renters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Contact Details & Office (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-8 border border-[#E7E4DF] shadow-xs">
            <div>
              <h3 className="text-xl font-bold text-[#10233B] mb-2">
                Havencrest Headquarters
              </h3>
              <p className="text-xs sm:text-sm text-[#6C7785] leading-relaxed mb-8">
                Located in the heart of downtown Austin with regional advisory coverage across Scottsdale, Denver, Seattle, and Portland.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F4EF] text-[#10233B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C6A36A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#89919B]">
                      Headquarters
                    </h4>
                    <p className="text-sm font-semibold text-[#10233B] mt-0.5">
                      1200 Congress Avenue, Suite 800<br />
                      Austin, Texas 78701
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F4EF] text-[#10233B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C6A36A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#89919B]">
                      Direct Telephone
                    </h4>
                    <a
                      href="tel:+15550102040"
                      className="text-sm font-semibold text-[#10233B] hover:text-[#C6A36A] transition-colors block mt-0.5"
                    >
                      +1 (555) 010-2040
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F4EF] text-[#10233B] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#C6A36A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#89919B]">
                      Email Enquiries
                    </h4>
                    <a
                      href="mailto:hello@havencrest.example"
                      className="text-sm font-semibold text-[#10233B] hover:text-[#C6A36A] transition-colors block mt-0.5"
                    >
                      hello@havencrest.example
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F4EF] text-[#10233B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C6A36A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#89919B]">
                      Advisory Hours
                    </h4>
                    <p className="text-sm font-semibold text-[#10233B] mt-0.5">
                      Monday – Friday: 8:30 AM – 6:30 PM CST<br />
                      Saturday: By Private Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#E7E4DF] mt-8">
              <div className="flex items-center gap-2 text-xs text-[#6C7785]">
                <ShieldCheck className="w-4 h-4 text-[#34785D]" />
                <span>Licensed real estate brokerage. Equal housing opportunity.</span>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E7E4DF] shadow-xs">
            <h3 className="text-xl font-bold text-[#10233B] mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#6C7785] mb-6">
              Fill out the form below and an advisor specializing in your location will reach out.
            </p>

            {submitted ? (
              <div className="py-12 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#34785D]/15 text-[#34785D] mx-auto flex items-center justify-center mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#10233B] mb-2">
                  Message Dispatched
                </h4>
                <p className="text-sm text-[#6C7785] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-[#10233B]">{name}</span>. Your inquiry regarding <span className="font-medium text-[#10233B]">{subject}</span> has been routed to our principal advisory desk. We will respond to <span className="font-semibold text-[#10233B]">{email}</span> within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#10233B] text-white rounded-full text-xs font-semibold hover:bg-[#172D49] transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full py-2.5 px-3.5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs sm:text-sm text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full py-2.5 px-3.5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs sm:text-sm text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full py-2.5 px-3.5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs sm:text-sm text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                      Topic / Interest *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full py-2.5 px-3.5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs sm:text-sm text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                    >
                      <option value="General Property Inquiry">General Property Inquiry</option>
                      <option value="Buying a Residential Property">Buying a Residential Property</option>
                      <option value="Selling / Listing Valuation">Selling / Listing Valuation</option>
                      <option value="Luxury Leasing / Rentals">Luxury Leasing / Rentals</option>
                      <option value="Investment & Development Advisory">Investment & Development Advisory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the property style, preferred locations, or questions you have..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full py-2.5 px-3.5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs sm:text-sm text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#10233B] hover:bg-[#172D49] active:scale-[0.99] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-[#C6A36A]" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
