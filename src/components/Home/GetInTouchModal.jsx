import { X } from "lucide-react";
import { useState } from "react";

/* =========================================================
   ODISHA DISTRICT → BLOCKS
========================================================= */

const ODISHA_LOCATIONS = {
  Angul: [
    "Angul",
    "Athmallik",
    "Banarpal",
    "Chhendipada",
    "Kaniha",
    "Kishorenagar",
    "Pallahara",
    "Talcher",
  ],

  Balangir: [
    "Balangir",
    "Bangomunda",
    "Belpara",
    "Deogaon",
    "Gudvella",
    "Khaprakhol",
    "Loisinga",
    "Muribahal",
    "Patnagarh",
    "Puintala",
    "Saintala",
    "Titlagarh",
  ],

  Balasore: [
    "Bahanaga",
    "Baliapal",
    "Balasore",
    "Bhograi",
    "Jaleswar",
    "Khantapada",
    "Nilagiri",
    "Oupada",
    "Remuna",
    "Simulia",
    "Soro",
  ],

  Bargarh: [
    "Ambabhona",
    "Attabira",
    "Bargarh",
    "Barpali",
    "Bhatli",
    "Bijepur",
    "Gaisilet",
    "Jharbandh",
    "Paikmal",
    "Padampur",
    "Sohela",
  ],

  Bhadrak: [
    "Basudevpur",
    "Bhadrak",
    "Bhandaripokhari",
    "Bonth",
    "Chandabali",
    "Dhamnagar",
    "Tihidi",
  ],

  Boudh: ["Boudh", "Harabhanga", "Kantamal"],

  Cuttack: [
    "Athagarh",
    "Badamba",
    "Banki",
    "Baramba",
    "Barang",
    "Cuttack Sadar",
    "Damapada",
    "Kantapada",
    "Mahanga",
    "Narasinghpur",
    "Niali",
    "Nischintakoili",
    "Salepur",
    "Tangi",
  ],

  Deogarh: ["Barkote", "Deogarh", "Reamal"],

  Dhenkanal: [
    "Bhuban",
    "Dhenkanal Sadar",
    "Gondia",
    "Hindol",
    "Kamakhyanagar",
    "Kankadahad",
    "Odapada",
    "Parjang",
  ],

  Gajapati: [
    "Gosani",
    "Gumma",
    "Kashinagar",
    "Mohana",
    "Nuagada",
    "R. Udayagiri",
    "Rayagada",
  ],

  Ganjam: [
    "Aska",
    "Beguniapada",
    "Belaguntha",
    "Bhanjanagar",
    "Buguda",
    "Chhatrapur",
    "Dharakote",
    "Digapahandi",
    "Ganjam",
    "Hinjilicut",
    "Jagannathprasad",
    "Kabisuryanagar",
    "Khalikote",
    "Kodala",
    "Patrapur",
    "Polasara",
    "Purusottampur",
    "Sanakhemundi",
    "Sheragada",
  ],

  Jagatsinghpur: [
    "Balikuda",
    "Biridi",
    "Ersama",
    "Jagatsinghpur",
    "Kujang",
    "Naugaon",
    "Raghunathpur",
  ],

  Jajpur: [
    "Badachana",
    "Bari",
    "Binjharpur",
    "Danagadi",
    "Dasarathpur",
    "Dharmasala",
    "Jajpur",
    "Korei",
    "Rasulpur",
    "Sukinda",
  ],

  Jharsuguda: ["Jharsuguda", "Kirmira", "Kolabira", "Laikera", "Lakhanpur"],

  Kalahandi: [
    "Bhawanipatna",
    "Dharamgarh",
    "Golamunda",
    "Jaipatna",
    "Junagarh",
    "Kalampur",
    "Karlamunda",
    "Kesinga",
    "Koksara",
    "Lanjigarh",
    "Madanpur Rampur",
    "Narla",
    "Thuamul Rampur",
  ],

  Kandhamal: [
    "Baliguda",
    "Chakapad",
    "Daringbadi",
    "G. Udayagiri",
    "K. Nuagaon",
    "Khajuripada",
    "Kotagarh",
    "Phiringia",
    "Phulbani",
    "Raikia",
    "Tikabali",
    "Tumudibandh",
  ],

  Kendrapara: [
    "Aul",
    "Derabish",
    "Garadpur",
    "Kendrapara",
    "Mahakalapada",
    "Marsaghai",
    "Pattamundai",
    "Rajkanika",
    "Rajnagar",
  ],

  Keonjhar: [
    "Anandapur",
    "Banspal",
    "Champua",
    "Ghatgaon",
    "Harichandanpur",
    "Hatadihi",
    "Joda",
    "Jhumpura",
    "Keonjhar Sadar",
    "Patna",
    "Saharpada",
    "Telkoi",
  ],

  Khordha: [
    "Balianta",
    "Balipatna",
    "Banapur",
    "Begunia",
    "Bhubaneswar",
    "Bolagarh",
    "Chilika",
    "Jatani",
    "Khordha",
    "Tangi",
  ],

  Koraput: [
    "Bandhugaon",
    "Boipariguda",
    "Borigumma",
    "Dasamantapur",
    "Jeypore",
    "Koraput",
    "Kotpad",
    "Kundra",
    "Lamtaput",
    "Laxmipur",
    "Nandapur",
    "Narayanpatana",
    "Pottangi",
    "Semiliguda",
  ],

  Malkangiri: [
    "Chitrakonda",
    "Kalimela",
    "Khairaput",
    "Korukonda",
    "Malkangiri",
    "Mathili",
    "Podia",
  ],

  Mayurbhanj: [
    "Bahalda",
    "Badasahi",
    "Baripada",
    "Bisoi",
    "Gopabandhunagar",
    "Jamda",
    "Jashipur",
    "Kaptipada",
    "Karanjia",
    "Khunta",
    "Kuliana",
    "Kusumi",
    "Morada",
    "Rairangpur",
    "Raruan",
    "Rasgovindpur",
    "Shamakhunta",
    "Suliapada",
    "Thakurmunda",
    "Udala",
  ],

  Nabarangpur: [
    "Chandahandi",
    "Dabugaon",
    "Jharigam",
    "Kosagumuda",
    "Nabarangpur",
    "Nandahandi",
    "Papadahandi",
    "Raighar",
    "Tentulikhunti",
    "Umerkote",
  ],

  Nayagarh: [
    "Bhapur",
    "Daspalla",
    "Gania",
    "Khandapada",
    "Nayagarh",
    "Nuagaon",
    "Odagaon",
    "Ranapur",
  ],

  Nuapada: ["Boden", "Khariar", "Komna", "Nuapada", "Sinapali"],

  Puri: [
    "Astaranga",
    "Brahmagiri",
    "Delanga",
    "Gop",
    "Kakatpur",
    "Kanas",
    "Krushnaprasad",
    "Nimapara",
    "Pipili",
    "Puri Sadar",
    "Satyabadi",
  ],

  Rayagada: [
    "Bisam Cuttack",
    "Chandrapur",
    "Gudari",
    "Gunupur",
    "Kalyansinghpur",
    "Kolnara",
    "Muniguda",
    "Padmapur",
    "Rayagada",
  ],

  Sambalpur: [
    "Bamra",
    "Dhankauda",
    "Jamankira",
    "Jujomura",
    "Kuchinda",
    "Maneswar",
    "Naktideul",
    "Rairakhol",
    "Rengali",
    "Sambalpur",
  ],

  Subarnapur: [
    "Binika",
    "Biramaharajpur",
    "Dunguripali",
    "Sonepur",
    "Tarva",
    "Ullunda",
  ],

  Sundargarh: [
    "Balisankara",
    "Bargaon",
    "Bisra",
    "Bonai",
    "Gurundia",
    "Hemgir",
    "Kutra",
    "Lahunipara",
    "Lathikata",
    "Lephripara",
    "Nuagaon",
    "Rajgangpur",
    "Rourkela",
    "Sundargarh",
    "Tangarpali",
  ],
};

/* =========================================================
   GET IN TOUCH MODAL
========================================================= */

function GetInTouchModal({ isOpen, onClose }) {
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
  });

  if (!isOpen) {
    return null;
  }

  /* =======================================================
     DISTRICTS
  ======================================================= */

  const districts = Object.keys(ODISHA_LOCATIONS);

  /* =======================================================
     BLOCKS BASED ON DISTRICT
  ======================================================= */

  const blocks = selectedDistrict ? ODISHA_LOCATIONS[selectedDistrict] : [];

  /* =======================================================
     NAME VALIDATION
  ======================================================= */

  const validateName = (value) => {
    const name = value.trim();

    if (!name) {
      return "Name is required.";
    }

    if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) {
      return "Name must contain letters only.";
    }

    return "";
  };

  /* =======================================================
     MOBILE VALIDATION
  ======================================================= */

  const validateMobile = (value) => {
    const mobile = value.trim();

    if (!mobile) {
      return "Mobile number is required.";
    }

    if (!/^[0-9]+$/.test(mobile)) {
      return "Mobile number must contain digits only.";
    }

    if (mobile.length !== 10) {
      return "Mobile number must be exactly 10 digits.";
    }

    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
      return "Please enter a valid Indian mobile number.";
    }

    return "";
  };

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const mobile = form.mobile.value.trim();

    const nameError = validateName(name);
    const mobileError = validateMobile(mobile);

    setErrors({
      name: nameError,
      mobile: mobileError,
    });

    if (nameError || mobileError) {
      return;
    }

    const state = form.state.value;
    const district = form.district.value;
    const block = form.block.value;
    const message = form.message.value.trim();

    /* =====================================================
       WHATSAPP MESSAGE
    ===================================================== */

    const whatsappMessage = `Hello HelixHome,

I would like to enquire about a property.

Name: ${name}
Mobile: ${mobile}

Address:
State: ${state}
District: ${district}
Block: ${block}

Message:
${message}

Thank you.`;

    /* =====================================================
       WHATSAPP NUMBER
       6370796992 → India (+91)
    ===================================================== */

    const whatsappNumber = "916370796992";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    /* =====================================================
       OPEN WHATSAPP
    ===================================================== */

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    /* =====================================================
       RESET FORM
    ===================================================== */

    form.reset();

    setSelectedDistrict("");

    setErrors({
      name: "",
      mobile: "",
    });

    onClose();
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="contact-modal-header">
          <h2>GET IN TOUCH</h2>

          <button
            type="button"
            className="contact-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <p className="contact-modal-subtitle">
          Let us help you find the perfect property.
        </p>

        {/* =================================================
            FORM
        ================================================= */}

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* =================================================
              FULL NAME
          ================================================= */}

          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              pattern="[A-Za-z]+(?:\s+[A-Za-z]+)*"
              onChange={(e) => {
                const value = e.target.value;

                setErrors((previous) => ({
                  ...previous,
                  name: validateName(value),
                }));
              }}
              required
            />

            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          {/* =================================================
              MOBILE NUMBER
          ================================================= */}

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>

            <input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              pattern="[6-9][0-9]{9}"
              maxLength="10"
              inputMode="numeric"
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");

                e.target.value = value;

                setErrors((previous) => ({
                  ...previous,
                  mobile: validateMobile(value),
                }));
              }}
              required
            />

            {errors.mobile && (
              <span className="form-error">{errors.mobile}</span>
            )}
          </div>

          {/* =================================================
              ADDRESS
          ================================================= */}

          <div className="form-group">
            <label>Address</label>

            <div className="address-row">
              {/* STATE */}

              <select name="state" value="Odisha" disabled>
                <option value="Odisha">Odisha</option>
              </select>

              {/* DISTRICT */}

              <select
                name="district"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                required
              >
                <option value="" disabled>
                  District
                </option>

                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>

              {/* BLOCK */}

              <select
                name="block"
                defaultValue=""
                disabled={!selectedDistrict}
                required
              >
                <option value="" disabled>
                  Block
                </option>

                {blocks.map((block) => (
                  <option key={block} value={block}>
                    {block}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* =================================================
              MESSAGE
          ================================================= */}

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell us your requirements..."
              rows="3"
              required
            ></textarea>
          </div>

          {/* =================================================
              SEND ENQUIRY
          ================================================= */}

          <button type="submit" className="contact-form-submit">
            <span>➤</span>
            SEND ENQUIRY
          </button>

          {/* =================================================
              SECURITY
          ================================================= */}

          <div className="form-security">
            <span>♙</span>
            Your information is secure with us.
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetInTouchModal;
