import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Check, ShieldCheck, ArrowRight, Building } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [purpose, setPurpose] = useState('Buying a Home');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9 AM - 12 PM)');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#10233B]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E7E4DF] my-8 animate-fadeIn">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E7E4DF] bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#10233B] flex items-center justify-center text-[#C6A36A]">
                <Building className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#10233B]">
                Book a Private Consultation
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#6C7785] hover:text-[#10233B] hover:bg-[#F7F4EF] rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="py-8 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#34785D]/15 text-[#34785D] mx-auto flex items-center justify-center mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-[#10233B] mb-2">
                  Consultation Confirmed
                </h4>
                <p className="text-sm text-[#6C7785] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-[#10233B]">{fullName}</span>. A Havencrest partner has been assigned to your request for <span className="font-medium text-[#10233B]">{purpose}</span>. We will contact you at <span className="font-semibold text-[#10233B]">{email}</span> within 2 business hours.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#10233B] text-white rounded-full text-xs font-semibold hover:bg-[#172D49] transition-colors"
                >
                  Return to Havencrest
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1.5">
                    Consultation Intent
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Buying a Home', 'Selling a Property', 'Luxury Rental', 'Investment Advisory'].map(
                      (item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setPurpose(item)}
                          className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all ${
                            purpose === item
                              ? 'border-[#10233B] bg-[#10233B] text-white shadow-xs'
                              : 'border-[#E7E4DF] bg-white text-[#243247] hover:bg-[#F7F4EF]'
                          }`}
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                      Target Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full py-2.5 px-3 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full py-2.5 px-3 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                    >
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                      <option value="Evening (5 PM - 7 PM)">Evening (5 PM - 7 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Eleanor Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full py-2.5 px-3.5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full py-2.5 px-3.5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full py-2.5 px-3.5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#89919B] uppercase tracking-wider block mb-1">
                    Specific Requirements or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specific architectural preferences, neighborhoods, or timing..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full py-2.5 px-3.5 bg-[#FCFBF9] border border-[#E7E4DF] rounded-xl text-xs text-[#10233B] focus:outline-none focus:border-[#C6A36A]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-3 px-6 bg-[#10233B] hover:bg-[#172D49] active:scale-[0.99] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Confirm Appointment</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A36A]" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#89919B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#34785D]" />
                  <span>Strict confidentiality guaranteed · No automated sales calls</span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
