import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h1 className="text-4xl font-bold tracking-tight mb-2">Login Successful!</h1>
          <p className="text-lg text-muted-foreground mb-12">Welcome to your dashboard, John Doe.</p>

          <Card className="w-full max-w-2xl text-left">
            <CardHeader>
              <CardTitle>Your Application Hub</CardTitle>
              <CardDescription>
                This is your main application area. All your tools and data are accessible from here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Here you can manage your account, view analytics, and access other features of the application. 
                This is a placeholder to show where the main content will live after a user logs in.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">View and edit your personal information.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">Adjust your application and notification settings.</p>
                    </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Explore Features</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;