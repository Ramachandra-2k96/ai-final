import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BrainCircuit, Phone } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BrainCircuit size={32} className="text-primary" />
            <span className="text-xl font-bold gradient-text">SMVITM</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/register">
              <Button variant="outline" className="gradient-bg text-white">
                Register Now
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-9">
            Explore the Future of AI & Machine Learning
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-muted-foreground sm:text-2xl md:mt-5 md:max-w-3xl">
            Join us for an immersive workshop diving deep into the world of
            Artificial Intelligence and Machine Learning.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/register">
              <Button size="lg" className="gradient-bg text-white">
                Register Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-center mb-10 gradient-text">
            Workshop Details
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <WorkshopCard
              title="Date & Time"
              description="October 25, 2023 | 9:00 AM - 3:30 PM"
            />
            <WorkshopCard title="Location" description="SMVITM Workshop" />
            <WorkshopCard
              title="Topics Covered"
              description="AI Fundamentals, Machine Learning, Deep Learning, and hands on project."
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-center mb-10 gradient-text">
            Prerequisites
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <PrerequisiteCard
              title="Basic Programming Knowledge"
              description="Familiarity with Python programming language is recommended."
            />
            <PrerequisiteCard
              title="Mathematics Background"
              description="Basic understanding of linear algebra and statistics will be helpful."
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-center mb-10 gradient-text">
            Why Attend?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ReasonCard
              title="Hands-on Experience"
              description="Gain practical skills through interactive sessions and projects."
            />
            <ReasonCard
              title="Career Advancement"
              description="Enhance your resume with in-demand AI and ML skills."
            />
            <ReasonCard
              title="Real-world Applications"
              description="Learn how AI and ML are transforming various industries."
            />
            <ReasonCard
              title="Certificate of Completion"
              description="Receive a certificate to showcase your new skills."
            />
            <ReasonCard
              title="Collaborative Learning"
              description="Work with peers in group projects to solve real-world challenges."
            />
            <ReasonCard
              title="Interactive Workshops"
              description="Participate in engaging, hands-on workshops designed to reinforce your learning."
            />
          </div>
        </div>
      </main>

      <footer className="bg-muted py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <span className="text-sm font-medium">Mr. Raghavendra Hegde</span>
              <span className="text-xs text-muted-foreground">
                Workshop Coordinator
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:+919876543212"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 98765 43212
                </a>
              </div>
              <span className="text-sm font-medium">
                Dr.Renita Sharon Monis
              </span>
              <span className="text-xs text-muted-foreground">
                Workshop Organiser
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:+919876543211"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 98765 43211
                </a>
              </div>
              <span className="text-sm font-medium">Akshaykumar</span>
              <span className="text-xs text-muted-foreground">
                Student Coordinator
              </span>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              © 2024 AI & ML Workshop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WorkshopCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="gradient-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function PrerequisiteCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function ReasonCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
