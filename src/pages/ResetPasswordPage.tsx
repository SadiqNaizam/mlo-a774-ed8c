import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AuthFormContainer from '../components/AuthFormContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardTitle, CardDescription } from '@/components/ui/card';

const ResetPasswordPage: React.FC = () => {
  console.log('ResetPasswordPage loaded');

  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Attempting to reset password...');

    if (!password || !confirmPassword) {
      toast.error('Please fill in both password fields.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    
    // In a real app, you would make an API call here to update the password.
    // For this example, we will simulate success.
    
    console.log('Password reset successfully.');
    toast.success('Password has been updated successfully.');

    // Redirect to the login page after a short delay to allow the user to see the toast.
    setTimeout(() => {
      navigate('/'); // Navigate to LoginPage as per App.tsx and user journey
    }, 1500);
  };

  const formHeader = (
    <>
      <CardTitle className="text-2xl">Reset Your Password</CardTitle>
      <CardDescription>
        Enter a new password for your account below.
      </CardDescription>
    </>
  );

  const formFooter = (
    <div className="text-center text-sm">
      Remember your password?{' '}
      <Link to="/" className="underline">
        Back to Login
      </Link>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AuthFormContainer header={formHeader} footer={formFooter}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;