import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Components
import AuthFormContainer from '../components/AuthFormContainer';
import SocialLoginButtons from '../components/SocialLoginButtons';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// shadcn/ui Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CardDescription, CardTitle } from '@/components/ui/card';

const RegistrationPage = () => {
  console.log('RegistrationPage loaded');

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Registration submitted with:', { name, email, password });
    // In a real application, you would handle the registration logic here.
    // On success, navigate to the dashboard.
    navigate('/dashboard'); // Path from App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AuthFormContainer
          header={
            <>
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Enter your information below to create your new account.
              </CardDescription>
            </>
          }
          footer={
            <div className="text-sm w-full text-center">
              Already have an account?{" "}
              <Link to="/" className="underline">
                Sign in
              </Link>
            </div>
          }
        >
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Create account
            </Button>
          </form>
          <div className="relative my-4">
            <Separator />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs uppercase text-muted-foreground">
              Or continue with
            </div>
          </div>
          <SocialLoginButtons />
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;