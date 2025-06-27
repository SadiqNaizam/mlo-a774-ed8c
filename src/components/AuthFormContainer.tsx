import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface AuthFormContainerProps {
  /**
   * The content to be displayed in the header section of the container.
   * Typically a title or a logo.
   */
  header: React.ReactNode;
  /**
   * The main content of the form, passed as children.
   */
  children: React.ReactNode;
  /**
   * The content to be displayed in the footer section.
   * Typically used for links to other auth pages (e.g., "Don't have an account?").
   */
  footer?: React.ReactNode;
}

/**
 * A consistent, centered layout container for authentication forms.
 * It provides slots for a header, the main form content (children),
 * and an optional footer.
 */
const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  header,
  children,
  footer,
}) => {
  console.log("AuthFormContainer loaded");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-950 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>{header}</CardHeader>
        <CardContent>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </div>
  );
};

export default AuthFormContainer;