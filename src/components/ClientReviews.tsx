import React from 'react';
import { CLIENT_REVIEWS } from '../data/solarData';
import { Star, Quote, CheckCircle, Building } from 'lucide-react';

export const ClientReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Verified Customer Satisfaction
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Client Testimonials & Feedback
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Read what builders, residential housing societies, and project owners say about our engineering standards, punctuality, and post-installation service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="space-y-4">
                {/* Top stars & quote mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-300" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "{review.review}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-neutral-200/80">
                <div className="font-display text-base font-bold text-neutral-900">
                  {review.clientName}
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  {review.location}
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{review.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-5 sm:p-6 rounded-xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <Building className="w-6 h-6 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <h4 className="text-sm font-bold text-neutral-900">
                Are you a Builder, Architect, or Housing Society Secretary?
              </h4>
              <p className="text-xs text-neutral-600 mt-0.5">
                We provide custom technical proposals, society AGM presentations, and structural layout blueprints.
              </p>
            </div>
          </div>
          <a
            href="#consultation"
            className="w-full sm:w-auto text-center px-4 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-normal sm:whitespace-nowrap shrink-0"
          >
            Request Society / Commercial Proposal
          </a>
        </div>

      </div>
    </section>
  );
};
