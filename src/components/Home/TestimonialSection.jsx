import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Das",
    location: "Bhubaneswar",
    text: "Homeluxe made our dream of owning a perfect home a reality. Their team was professional and supportive throughout the journey.",
  },
  {
    name: "Priyanka Sahu",
    location: "Cuttack",
    text: "Excellent service and genuine guidance. They helped us find the best property within our budget.",
  },
  {
    name: "Ankit Pattnaik",
    location: "Puri",
    text: "From property selection to paperwork, everything was smooth. The team at Homeluxe is trustworthy and reliable.",
  },
  {
    name: "Sneha Mohanty",
    location: "Bhubaneswar",
    text: "The entire process was simple and stress-free. They understood our requirements and found the perfect property.",
  },
  {
    name: "Rahul Behera",
    location: "Rourkela",
    text: "Great experience from start to finish. The team provided honest advice and helped us choose a beautiful property.",
  },
  {
    name: "Ananya Patnaik",
    location: "Bhubaneswar",
    text: "Very professional service and excellent property options. The team was always available whenever we needed assistance.",
  },
  {
    name: "Sourav Mishra",
    location: "Cuttack",
    text: "I really appreciated the transparency throughout the process. Everything was explained clearly and professionally.",
  },
  {
    name: "Neha Dash",
    location: "Puri",
    text: "Homeluxe made buying our property easy and comfortable. Their guidance and support were excellent throughout.",
  },
];

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      {/* Heading */}
      <div className="testimonial-heading">
        <span className="testimonial-line"></span>

        <span className="testimonial-title">WHAT OUR CLIENTS SAY</span>

        <span className="testimonial-line"></span>
      </div>

      {/* Slider */}
      <div className="testimonial-slider">
        <div className="testimonial-track">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              {/* Stars */}
              <div className="testimonial-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={13}
                    strokeWidth={1.5}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="testimonial-text">{testimonial.text}</p>

              {/* Client */}
              <div className="testimonial-client">
                <h4>{testimonial.name}</h4>

                <span>{testimonial.location}</span>
              </div>

              {/* Quote */}
              <Quote
                className="testimonial-quote"
                size={38}
                strokeWidth={1.3}
              />
            </div>
          ))}
        </div>
      </div>

      {/* View All */}
      <button className="testimonial-view-btn" type="button">
        <span>VIEW ALL TESTIMONIALS</span>

        <span className="testimonial-view-arrow">→</span>
      </button>
    </section>
  );
}

export default TestimonialSection;
