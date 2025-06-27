import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom Layout and Auth Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormContainer from '@/components/AuthFormContainer';
import SocialLoginButtons from '@/components/SocialLoginButtons';

// shadcn/ui Components for the form
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { CardTitle, CardDescription } from '@/components/ui/card';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login form submitted. Redirecting to dashboard...");
    // In a real application, you would perform authentication here.
    // On success, navigate to the dashboard.
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <AuthFormContainer
          header={
            <>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </>
          }
          footer={
            <div className="w-full text-center text-sm">
              Don't have an account?{' '}
              <Link to="/registration" className="underline text-primary">
                Sign up
              </Link>
            </div>
          }
        >
          <div className="w-full space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password" // Path from App.tsx
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me" className="text-sm font-normal select-none cursor-pointer">
                  Remember me
                </Label>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <SocialLoginButtons />
          </div>
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;