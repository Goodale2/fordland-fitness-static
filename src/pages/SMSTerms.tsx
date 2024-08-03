import React from 'react';
import { Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';

const SMSTerms: React.FC = () => (
  <>
    <Heading as="h1" size="lg" mb={4}>
    Fordland Fitness SMS Terms and Conditions
    </Heading>
    <Flex gap={4} flexDirection={"column"}>
    <Text>
    By participating in our SMS/text messaging program, you agree to the following terms and conditions:
    </Text>
    <UnorderedList>
        <ListItem mb={4}>
        Service: Fordland Fitness may provide text messages (SMS) to subscribers who opt-in to receive messages.
        </ListItem>
        <ListItem mb={4}>
        Opt-in: By opting into Fordland Fitness SMS program, you consent to receive recurring marketing messages from Fordland Fitness at the phone number provided. Message frequency may vary.
        </ListItem>
        <ListItem mb={4}>
        Opt-out: You can opt-out of receiving SMS messages from Fordland Fitness at any time by texting STOP to [SMS shortcode or phone number]. After opting out, you will no longer receive messages, and your information will not be used for further messaging unless you opt back in.
        </ListItem>
        <ListItem mb={4}>
        Cost: Message and data rates may apply. Fordland Fitness is not responsible for any charges from your mobile carrier associated with SMS messages. Check with your mobile carrier for details.
        </ListItem>
        <ListItem mb={4}>
        Support: For support or assistance regarding our SMS program, text HELP to [SMS shortcode or phone number], or contact customer service at [customer service phone number or email].
        </ListItem>
        <ListItem mb={4}>
        Privacy: Fordland Fitness respects your privacy. We will not share or use your mobile number for any purpose other than to send you SMS/text messages related to Fordland Fitness offers and updates.
        </ListItem>
        <ListItem mb={4}>
        Changes: Fordland Fitness reserves the right to modify or amend these terms and conditions at any time. Any changes will be effective immediately upon posting the updated terms and conditions on our website or notifying you via SMS.
        </ListItem>
        <ListItem mb={4}>
        Participants: By participating in Fordland Fitness SMS program, you affirm that you are at least 18 years old or have obtained parental consent.
        </ListItem>
        <ListItem mb={4}>
        Consent: By providing your phone number and opting into Fordland Fitness SMS program, you consent to receive automated marketing messages from Fordland Fitness at the provided phone number.
        </ListItem>
        <ListItem>
        General: These terms and conditions are governed by the laws of Missouri. For more information about Fordland Fitness SMS program, visit our website or contact customer service.
        </ListItem>
    </UnorderedList>
    <Text>
    These Terms and Conditions are subject to being updated without notice.
    </Text>
    </Flex>
  </>
);

export default SMSTerms;
