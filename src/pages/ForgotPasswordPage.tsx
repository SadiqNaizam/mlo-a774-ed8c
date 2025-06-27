import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormContainer from '@/components/AuthFormContainer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardTitle, CardDescription } from '@/components/ui/card';

const ForgotPasswordPage: React.FC = () => {
  console.log('ForgotPasswordPage loaded');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would make an API call here.
    console.log('Password reset requested for:', email);

    // Show a success message to the user as per the user journey.
    toast.success('If an account with that email exists, a password reset link has been sent.');

    // Optionally clear the input
    setEmail('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <AuthFormContainer
          header={
            <>
              <CardTitle className="text-2xl">Forgot Your Password?</CardTitle>
              <CardDescription>
                No problem. Enter your email address below and we'll send you a link to reset it.
              </CardDescription>
            </>
          }
          footer={
            <div className="text-center text-sm w-full">
              Remember your password?{' '}
              <Link to="/" className="underline hover:text-primary">
                Sign in
              </Link>
            </div>
          }
        >
          <form onSubmit={handleSubmit} className="grid gap-4">
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
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;