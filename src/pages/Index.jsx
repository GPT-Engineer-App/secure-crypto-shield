import React, { useState } from "react";
import { Box, Heading, Text, VStack, Input, Button, Image, useToast } from "@chakra-ui/react";
import { FaLock, FaLockOpen } from "react-icons/fa";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const toast = useToast();

  const handleEncrypt = () => {
    if (inputText.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter some text to encrypt.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const encrypted = btoa(inputText);
    setEncryptedText(encrypted);
    setInputText("");
  };

  const handleDecrypt = () => {
    if (encryptedText.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter some text to decrypt.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const decrypted = atob(encryptedText);
    setDecryptedText(decrypted);
    setEncryptedText("");
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Cybersecurity Encryption Project
        </Heading>
        <Image src="https://images.unsplash.com/photo-1590065672897-8cd8dc54a530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZW5jcnlwdGlvbnxlbnwwfHx8fDE3MTA2MzU2MTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Encryption" boxSize="200px" />
        <Text fontSize="xl">Enter text below to encrypt or decrypt using Base64 encoding.</Text>
        <VStack spacing={4} align="stretch" width="100%" maxWidth="400px">
          <Input placeholder="Enter text to encrypt" value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <Button leftIcon={<FaLock />} colorScheme="blue" onClick={handleEncrypt}>
            Encrypt
          </Button>
          <Input placeholder="Enter text to decrypt" value={encryptedText} onChange={(e) => setEncryptedText(e.target.value)} />
          <Button leftIcon={<FaLockOpen />} colorScheme="green" onClick={handleDecrypt}>
            Decrypt
          </Button>
          {decryptedText && (
            <Box borderWidth={1} borderRadius="md" p={4}>
              <Text fontSize="lg" fontWeight="bold">
                Decrypted Text:
              </Text>
              <Text>{decryptedText}</Text>
            </Box>
          )}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
