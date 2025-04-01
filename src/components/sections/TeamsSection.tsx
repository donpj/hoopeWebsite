"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TeamsSection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            For Teams & Businesses
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline how you collaborate with and pay independent talent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Built for efficient collaboration
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're a startup scaling quickly, an agency managing
              multiple clients, or an established company embracing flexible
              work - we provide the tools to work effectively with freelancers.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Focus on your business goals, and we'll handle the operational
              overhead of managing external talent.
            </p>

            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/request-demo">Request Demo</Link>
              </Button>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <p className="text-muted-foreground">
                Team Collaboration Illustration
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-background p-8 rounded-lg shadow-sm">
            <div className="text-primary text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-4">For Startups</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Scale your team flexibly</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Manage budgets easily</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Simplified contractor payments</span>
              </li>
            </ul>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-sm">
            <div className="text-primary text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-4">For Agencies</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Manage multiple client projects</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Standardized contractor onboarding</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Efficient payment workflows</span>
              </li>
            </ul>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-sm">
            <div className="text-primary text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-4">For Enterprises</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Compliance & risk management</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Global payment capabilities</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Integration with existing systems</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-10 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">
              Ready to optimize your freelance collaborations?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Request a demo to see how Hoope can help your business work
              smarter with independent talent.
            </p>
            <Button size="lg" asChild>
              <Link href="/request-demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
