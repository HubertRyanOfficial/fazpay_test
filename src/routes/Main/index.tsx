import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

export default function Main() {
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center px-4">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Login with yout account using email and password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <LoginForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Create your account in FazPay</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <SignUpForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
