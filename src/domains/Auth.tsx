// import { x } from '@xstyled/emotion';
// import LockClosedIcon from '@heroicons/react/outline/LockClosedIcon';
// import { useForm } from 'react-hook-form';
// // import { Logo } from '@amani/elements/Logo';
// import { useAuth } from '@github/utils/useAuth';

export const LOCAL_STORAGE_USER_TOKEN_KEY = 'user_token';

// interface FormValues {
//   email: string;
//   password: string;
// }

export const Auth = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  // } = useForm<FormValues>();
  // const { emailLogin, googleAuth, authError } = useAuth();

  return (
    <></>
    // <x.div
    //   minH="100vh"
    //   display="flex"
    //   alignItems="center"
    //   justifyContent="center"
    //   py={12}
    //   px={{ _: 4, sm: 6, lg: 8 }}
    //   bg="gray-100"
    // >
    //   <x.div maxW="sm" w="full" pb={100} spaceY={8}>
    //     <x.div
    //       color="brand"
    //       display="flex"
    //       flexDirection="column"
    //       alignItems="center"
    //     >
    //       {/* <Logo w="60%" /> */}
    //       <x.h2
    //         mt={6}
    //         textAlign="center"
    //         text="3xl"
    //         fontWeight="extrabold"
    //         color="gray-800"
    //       >
    //         Login to your account
    //       </x.h2>
    //     </x.div>
    //     <x.form mt={8} spaceY={6} onSubmit={handleSubmit(emailLogin)}>
    //       <x.input type="hidden" name="remember" value="true" />
    //       <x.div borderRadius="md" spaceY={6}>
    //         <input
    //           label="Email"
    //           type="email"
    //           {...register('email', { required: true })}
    //           onError={errors['email']}
    //         />
    //         <Input
    //           label="Password"
    //           type="password"
    //           {...register('password')}
    //           error={errors['password']}
    //         />
    //       </x.div>
    //       {/* <Link to="#">
    //         <x.a
    //           text="sm"
    //           fontWeight="medium"
    //           color={{ _: 'indigo-600', hover: 'indigo-500' }}
    //           textDecoration="none"
    //         >
    //           Forgot your password?
    //         </x.a>
    //       </Link> */}
    //       <x.div>
    //         <Button
    //           w="full"
    //           display="flex"
    //           alignItems="center"
    //           justifyContent="center"
    //           loading={isSubmitting}
    //         >
    //           <LockClosedIcon width={16} />
    //           <x.span ml={1}>{isSubmitting ? 'Logging in...' : 'Login'}</x.span>
    //         </Button>
    //       </x.div>
    //     </x.form>
    //     <x.div position="relative">
    //       <x.div
    //         position="absolute"
    //         display="flex"
    //         top={1}
    //         right={1}
    //         bottom={1}
    //         left={1}
    //         alignItems="center"
    //       >
    //         <x.div w="full" borderTop borderColor="gray-300" />
    //       </x.div>
    //       <x.div
    //         position="relative"
    //         display="flex"
    //         justifyContent="center"
    //         fontSize="sm"
    //       >
    //         <x.span px={2} bg="gray-100" color="gray-500">
    //           Or continue with
    //         </x.span>
    //       </x.div>
    //     </x.div>
    //     <Button
    //       w="full"
    //       display="flex"
    //       alignItems="center"
    //       justifyContent="center"
    //       onClick={googleAuth}
    //     >
    //       <x.svg
    //         width={16}
    //         height={16}
    //         viewBox="0 0 16 16"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //         strokeWidth="1.33333"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         mr={2}
    //       >
    //         <path
    //           d="M7.99203 9.26927V6.78927H14.232C14.3254 7.20927 14.3987 7.6026 14.3987 8.15594C14.3987 11.9626 11.8454 14.6693 7.9987 14.6693C4.3187 14.6693 1.33203 11.6826 1.33203 8.0026C1.33203 4.3226 4.3187 1.33594 7.9987 1.33594C9.7987 1.33594 11.3054 1.99594 12.4587 3.07594L10.5654 4.91594C10.0854 4.4626 9.24536 3.92927 7.9987 3.92927C5.79203 3.92927 3.99203 5.7626 3.99203 8.00927C3.99203 10.2559 5.79203 12.0893 7.9987 12.0893C10.552 12.0893 11.492 10.3226 11.6654 9.27594H7.99203V9.26927Z"
    //           fill="currentColor"
    //         />
    //       </x.svg>
    //       Login with Google
    //     </Button>
    //     <x.p mt={0} fontSize="sm" color="red-600" position="absolute" maxW="sm">
    //       {authError}
    //     </x.p>
    //   </x.div>
    // </x.div>
  );
};
