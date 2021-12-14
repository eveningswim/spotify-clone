import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { FC, useState } from "react";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: string }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <Box height="100vh" width="100vw" bg="black">
      <Flex justify="center" align="center" height="100px">
        Hello
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <form>
          <label>
            <input type="email" name="" id="" />
          </label>
        </form>
      </Flex>
    </Box>
  );
};

export default AuthForm;
