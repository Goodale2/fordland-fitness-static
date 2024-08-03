'use client'

import { ReactNode } from 'react'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

// import { AppStoreBadge } from '#/components/AppStoreBadge'
// import { PlayStoreBadge } from '#/components/PlayStoreBadge'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'/about'}>
              About Us
            </Box>
            <Box as="a" href={'/contact'}>
              Contact Us
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'/contact'}>
              Help Center
            </Box>
            <Box as="a" href={'/terms_of_service'}>
              Community Guidelines
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={'/waiver'}>
              Waiver
            </Box>
            <Box as="a" href={'/parental_waiver'}>
              Parental Waiver
            </Box>
            <Box as="a" href={'/terms_of_service'}>
              Terms of Service
            </Box>
            <Box as="a" href={'/sms_terms'}>
              SMS Terms and Conditions
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install Entry App</ListHeader>
                <Link href='https://apps.apple.com/us/app/kisi/id687291321' target='blank'><svg width="150" height="45" viewBox="0 0 150 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0)"><path d="M144.663 44.444H5.254C2.358 44.444 0 42.08 0 39.186V5.25A5.26 5.26 0 015.254 0h139.409C147.559 0 150 2.356 150 5.251v33.935c0 2.894-2.441 5.258-5.337 5.258z" fill="#A6A6A6"></path><path d="M148.924 39.187a4.255 4.255 0 01-4.26 4.255H5.254A4.26 4.26 0 01.99 39.187V5.25A4.266 4.266 0 015.254.989h139.409a4.26 4.26 0 014.26 4.261l.001 33.937z" fill="#000"></path><path d="M33.476 21.982c-.033-3.58 2.932-5.323 3.067-5.404-1.678-2.448-4.28-2.782-5.195-2.81-2.186-.23-4.306 1.309-5.42 1.309-1.135 0-2.85-1.286-4.697-1.248-2.378.037-4.602 1.413-5.822 3.551-2.518 4.359-.64 10.765 1.772 14.288 1.207 1.725 2.617 3.652 4.462 3.584 1.806-.074 2.48-1.15 4.66-1.15 2.158 0 2.791 1.15 4.674 1.107 1.937-.031 3.158-1.733 4.322-3.475 1.394-1.977 1.954-3.925 1.977-4.025-.046-.016-3.764-1.434-3.8-5.727zM29.92 11.451c.971-1.214 1.636-2.867 1.451-4.543-1.405.062-3.163.972-4.175 2.16-.896 1.046-1.696 2.762-1.49 4.375 1.58.118 3.2-.796 4.214-1.992zM59.605 35.004h-2.523L55.7 30.661h-4.805l-1.316 4.343h-2.457l4.76-14.786h2.94l4.783 14.786zm-4.322-6.165l-1.25-3.861c-.132-.395-.38-1.324-.745-2.786h-.045c-.145.63-.38 1.558-.702 2.786l-1.228 3.86h3.97zM71.847 29.542c0 1.813-.49 3.247-1.47 4.3-.878.936-1.968 1.404-3.27 1.404-1.404 0-2.413-.505-3.027-1.514h-.044v5.617h-2.37V27.852c0-1.14-.03-2.31-.087-3.51h2.083l.132 1.69h.045c.79-1.273 1.989-1.909 3.598-1.909 1.257 0 2.307.497 3.147 1.491.843.996 1.263 2.305 1.263 3.928zm-2.414.087c0-1.038-.233-1.894-.702-2.567-.512-.702-1.2-1.053-2.062-1.053-.585 0-1.116.195-1.59.581a2.696 2.696 0 00-.932 1.526c-.074.293-.11.533-.11.722v1.777c0 .776.237 1.43.713 1.965.475.534 1.093.801 1.853.801.893 0 1.587-.344 2.084-1.031.497-.688.746-1.595.746-2.721zM84.11 29.542c0 1.813-.49 3.247-1.471 4.3-.877.936-1.967 1.404-3.268 1.404-1.404 0-2.413-.505-3.027-1.514H76.3v5.617h-2.369V27.852c0-1.14-.03-2.31-.088-3.51h2.084l.132 1.69h.044c.79-1.273 1.988-1.909 3.598-1.909 1.257 0 2.307.497 3.149 1.491.839.996 1.26 2.305 1.26 3.928zm-2.413.087c0-1.038-.235-1.894-.704-2.567-.512-.702-1.197-1.053-2.06-1.053-.586 0-1.116.195-1.592.581a2.693 2.693 0 00-.931 1.526c-.072.293-.11.533-.11.722v1.777c0 .776.238 1.43.711 1.965.476.533 1.093.801 1.856.801.892 0 1.586-.344 2.083-1.031.498-.688.747-1.595.747-2.721zM97.821 30.858c0 1.257-.437 2.28-1.313 3.07-.964.864-2.305 1.295-4.028 1.295-1.591 0-2.867-.306-3.832-.92l.549-1.975a6.493 6.493 0 003.424.944c.892 0 1.587-.202 2.086-.604.496-.402.744-.942.744-1.616 0-.6-.204-1.105-.614-1.515-.408-.41-1.09-.791-2.04-1.144-2.59-.965-3.883-2.38-3.883-4.24 0-1.215.454-2.212 1.361-2.987.905-.777 2.112-1.165 3.62-1.165 1.346 0 2.464.234 3.356.702l-.592 1.931c-.834-.453-1.776-.68-2.83-.68-.833 0-1.485.206-1.951.615a1.755 1.755 0 00-.593 1.339c0 .584.226 1.067.68 1.447.394.352 1.11.732 2.15 1.142 1.273.512 2.207 1.11 2.808 1.797.6.685.898 1.541.898 2.564zM105.653 26.12h-2.611v5.177c0 1.316.46 1.974 1.382 1.974.424 0 .775-.037 1.053-.11l.065 1.799c-.466.174-1.081.262-1.842.262-.936 0-1.667-.285-2.194-.855-.526-.572-.79-1.53-.79-2.875v-5.374H99.16V24.34h1.556v-1.952l2.326-.703v2.655h2.611v1.78zM117.434 29.585c0 1.64-.468 2.985-1.404 4.037-.981 1.084-2.283 1.623-3.907 1.623-1.564 0-2.81-.518-3.739-1.556-.928-1.038-1.393-2.348-1.393-3.927 0-1.652.478-3.005 1.437-4.058.956-1.053 2.248-1.58 3.871-1.58 1.564 0 2.823.52 3.773 1.558.909 1.008 1.362 2.31 1.362 3.904zm-2.457.077c0-.983-.21-1.826-.636-2.53-.497-.85-1.207-1.275-2.127-1.275-.952 0-1.675.425-2.172 1.275-.425.705-.635 1.561-.635 2.575 0 .983.21 1.826.635 2.529.512.85 1.228 1.275 2.151 1.275.905 0 1.615-.433 2.127-1.298.437-.716.657-1.569.657-2.55zM125.134 26.425a4.107 4.107 0 00-.746-.065c-.834 0-1.478.314-1.931.944-.395.556-.593 1.258-.593 2.106v5.594h-2.367l.022-7.304c0-1.229-.03-2.348-.089-3.357h2.063l.087 2.04h.065c.25-.7.645-1.265 1.185-1.689a2.865 2.865 0 011.712-.57c.219 0 .417.015.592.043v2.258zM135.729 29.169c0 .424-.028.782-.087 1.074h-7.106c.027 1.054.371 1.86 1.031 2.415.599.496 1.373.745 2.324.745 1.052 0 2.012-.167 2.876-.504l.371 1.644c-1.009.44-2.2.66-3.575.66-1.653 0-2.951-.487-3.895-1.46-.942-.972-1.415-2.277-1.415-3.915 0-1.608.439-2.947 1.318-4.015.92-1.14 2.163-1.71 3.728-1.71 1.537 0 2.7.57 3.49 1.71.625.906.94 2.026.94 3.356zm-2.259-.615c.016-.702-.139-1.308-.46-1.82-.41-.66-1.04-.988-1.888-.988-.774 0-1.404.32-1.885.965-.395.512-.629 1.127-.701 1.842h4.934v.001zM54.5 11.121c0 1.308-.392 2.292-1.176 2.954-.725.61-1.756.915-3.092.915-.662 0-1.229-.029-1.703-.087V7.758c.619-.1 1.285-.151 2.005-.151 1.273 0 2.232.276 2.878.83.725.625 1.088 1.52 1.088 2.684zm-1.228.032c0-.847-.224-1.497-.673-1.95-.449-.453-1.105-.68-1.968-.68-.367 0-.679.025-.938.076v5.432c.144.022.406.032.787.032.891 0 1.579-.247 2.063-.743.485-.495.73-1.218.73-2.167zM61.01 12.263c0 .806-.23 1.466-.69 1.984-.482.532-1.121.797-1.919.797-.769 0-1.381-.254-1.838-.765-.455-.51-.683-1.153-.683-1.929 0-.811.234-1.477.706-1.993.47-.517 1.104-.776 1.902-.776.769 0 1.386.255 1.854.765.445.495.668 1.135.668 1.917zm-1.208.038c0-.483-.104-.898-.312-1.243-.244-.418-.592-.627-1.044-.627-.468 0-.824.209-1.068.627-.21.345-.312.766-.312 1.264 0 .484.104.898.312 1.244.252.417.603.626 1.056.626.445 0 .794-.212 1.045-.638.215-.352.323-.77.323-1.253zM69.739 9.688L68.1 14.926h-1.067l-.679-2.275a17.033 17.033 0 01-.42-1.692h-.022a12.388 12.388 0 01-.42 1.692l-.722 2.275h-1.079L62.15 9.688h1.197l.592 2.49c.143.589.261 1.15.355 1.68h.022c.086-.437.23-.995.432-1.67l.743-2.5h.949l.712 2.448c.172.596.312 1.17.42 1.724h.032c.08-.539.198-1.113.356-1.724l.636-2.447h1.143v-.001zM75.776 14.926H74.61v-3c0-.925-.351-1.387-1.055-1.387-.346 0-.625.127-.842.381a1.353 1.353 0 00-.323.898v3.107h-1.164v-3.74c0-.46-.015-.96-.043-1.5h1.024l.054.82h.032c.136-.255.338-.465.604-.633a1.968 1.968 0 011.055-.294c.49 0 .896.158 1.22.474.401.388.603.967.603 1.736v3.138zM78.987 14.926h-1.164V7.284h1.164v7.642zM85.842 12.263c0 .806-.23 1.466-.69 1.984-.482.532-1.122.797-1.919.797-.77 0-1.382-.254-1.837-.765-.456-.51-.684-1.153-.684-1.929 0-.811.235-1.477.706-1.993.47-.517 1.104-.776 1.9-.776.77 0 1.388.255 1.856.765.445.495.668 1.135.668 1.917zm-1.209.038c0-.483-.104-.898-.312-1.243-.243-.418-.592-.627-1.043-.627-.47 0-.825.209-1.068.627-.209.345-.312.766-.312 1.264 0 .484.104.898.312 1.244.252.417.603.626 1.057.626.444 0 .792-.212 1.043-.638.217-.352.323-.77.323-1.253zM91.478 14.926h-1.046l-.087-.604h-.032c-.358.481-.868.722-1.53.722-.494 0-.894-.158-1.195-.474a1.488 1.488 0 01-.41-1.067c0-.64.266-1.127.803-1.465.536-.338 1.289-.504 2.259-.496v-.098c0-.69-.362-1.034-1.088-1.034-.517 0-.972.13-1.365.388l-.237-.765c.487-.3 1.088-.452 1.797-.452 1.369 0 2.055.722 2.055 2.167v1.929c0 .523.026.94.076 1.249zm-1.21-1.8v-.808c-1.284-.022-1.926.33-1.926 1.055 0 .274.073.478.224.615.15.136.34.204.568.204.256 0 .495-.08.713-.242a.992.992 0 00.422-.824zM98.094 14.926h-1.033l-.054-.841h-.033c-.33.64-.892.96-1.682.96-.63 0-1.157-.248-1.573-.744-.417-.495-.625-1.139-.625-1.929 0-.848.226-1.534.68-2.059.438-.489.976-.733 1.616-.733.703 0 1.195.237 1.475.711h.023V7.284h1.165v6.23c0 .51.014.98.041 1.412zm-1.206-2.21v-.873a1.326 1.326 0 00-.453-1.072 1.144 1.144 0 00-.78-.285c-.434 0-.774.172-1.024.517-.248.346-.373.787-.373 1.326 0 .518.119.938.358 1.261.252.345.592.517 1.017.517.383 0 .688-.144.92-.431.225-.266.335-.586.335-.96zM108.053 12.263c0 .806-.23 1.466-.69 1.984-.482.532-1.12.797-1.919.797-.767 0-1.38-.254-1.837-.765-.456-.51-.684-1.153-.684-1.929 0-.811.235-1.477.706-1.993.471-.517 1.104-.776 1.903-.776.768 0 1.387.255 1.854.765.444.495.667 1.135.667 1.917zm-1.206.038c0-.483-.105-.898-.313-1.243-.245-.418-.592-.627-1.045-.627-.467 0-.822.209-1.068.627-.209.345-.312.766-.312 1.264 0 .484.104.898.312 1.244.252.417.603.626 1.057.626.444 0 .794-.212 1.045-.638.215-.352.324-.77.324-1.253zM114.314 14.926h-1.163v-3c0-.925-.351-1.387-1.057-1.387-.345 0-.624.127-.84.381a1.35 1.35 0 00-.323.898v3.107h-1.165v-3.74c0-.46-.014-.96-.042-1.5h1.023l.054.82h.032a1.7 1.7 0 01.604-.633 1.97 1.97 0 011.056-.294c.488 0 .895.158 1.218.474.403.388.603.967.603 1.736v3.138zM122.151 10.56h-1.282v2.544c0 .647.228.97.679.97.209 0 .382-.017.519-.054l.03.883c-.23.087-.533.13-.905.13-.46 0-.818-.14-1.077-.42-.26-.28-.388-.75-.388-1.412V10.56h-.766v-.872h.766v-.96l1.141-.345v1.304h1.282v.873h.001zM128.316 14.926h-1.166v-2.978c0-.94-.351-1.41-1.054-1.41-.54 0-.909.273-1.112.818a1.48 1.48 0 00-.054.418v3.15h-1.163v-7.64h1.163v3.157h.022c.367-.574.892-.861 1.574-.861.482 0 .881.158 1.197.475.395.394.593.98.593 1.756v3.115zM134.674 12.059c0 .209-.015.384-.043.528h-3.492c.015.518.182.912.505 1.185.296.245.677.367 1.144.367.516 0 .988-.082 1.412-.248l.182.809c-.496.216-1.081.323-1.758.323-.811 0-1.45-.239-1.912-.716-.464-.478-.694-1.12-.694-1.924 0-.79.214-1.447.646-1.972.452-.56 1.062-.84 1.832-.84.753 0 1.325.28 1.712.84.312.445.466.995.466 1.648zm-1.111-.301a1.565 1.565 0 00-.225-.895c-.202-.323-.51-.485-.927-.485-.38 0-.69.158-.927.474a1.768 1.768 0 00-.345.906h2.424z" fill="#fff"></path></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h150v44.444H0z"></path></clipPath></defs></svg></Link>
                <Link href='https://play.google.com/store/apps/details?id=de.kisi.android&pcampaignid=web_share' target='blank'><svg width="150" height="45" viewBox="0 0 150 45" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0)"><path d="M144.444 44.452H5.556C2.444 44.452 0 42.008 0 38.897V5.563C0 2.453 2.444.008 5.556.008h138.888c3.112 0 5.556 2.444 5.556 5.555v33.334c0 3.11-2.444 5.555-5.556 5.555z" fill="#000"></path><path d="M144.444.897c2.556 0 4.667 2.11 4.667 4.666v33.334c0 2.555-2.111 4.666-4.667 4.666H5.556C3 43.563.889 41.453.889 38.897V5.563C.889 3.008 3 .897 5.556.897h138.888zm0-.89H5.556C2.444.008 0 2.564 0 5.564v33.334c0 3.11 2.444 5.555 5.556 5.555h138.888c3.112 0 5.556-2.444 5.556-5.555V5.563c0-3-2.444-5.555-5.556-5.555z" fill="#A6A6A6"></path><path d="M52.667 11.341c0 .889-.223 1.667-.778 2.222-.667.667-1.445 1-2.445 1-1 0-1.777-.333-2.444-1-.667-.666-1-1.444-1-2.444s.333-1.778 1-2.445c.667-.666 1.444-1 2.444-1 .445 0 .89.112 1.334.334.444.222.778.444 1 .778l-.556.555c-.444-.555-1-.778-1.778-.778-.666 0-1.333.223-1.777.778-.556.445-.778 1.111-.778 1.889s.222 1.444.778 1.889c.555.444 1.11.778 1.777.778.778 0 1.334-.223 1.89-.778a1.84 1.84 0 00.555-1.333h-2.445v-.89h3.223v.445zm5.11-2.778h-3v2.111h2.779v.778h-2.778v2.111h3v.89h-3.89V7.785h3.89v.777zm3.667 5.89h-.889v-5.89h-1.888v-.777h4.666v.777h-1.889v5.89zm5.111 0V7.785h.89v6.666h-.89zm4.667 0h-.889v-5.89h-1.889v-.777H73v.777h-1.889v5.89h.111zm10.556-.89c-.667.667-1.445 1-2.445 1-1 0-1.778-.333-2.444-1-.667-.666-1-1.444-1-2.444s.333-1.778 1-2.445c.666-.666 1.444-1 2.444-1s1.778.334 2.445 1c.666.667 1 1.445 1 2.445 0 1-.334 1.778-1 2.444zm-4.223-.555c.445.444 1.112.778 1.778.778.667 0 1.334-.223 1.778-.778a2.68 2.68 0 00.778-1.89c0-.777-.222-1.444-.778-1.888-.444-.444-1.111-.778-1.778-.778-.666 0-1.333.222-1.778.778a2.68 2.68 0 00-.777 1.889c0 .778.222 1.444.777 1.889zM84 14.452V7.786h1l3.222 5.222V7.786h.889v6.666h-.889l-3.444-5.444v5.444H84zM75.667 24.23c-2.667 0-4.778 2-4.778 4.778a4.742 4.742 0 004.778 4.777c2.666 0 4.777-2 4.777-4.777 0-2.89-2.11-4.778-4.777-4.778zm0 7.555c-1.445 0-2.667-1.222-2.667-2.888 0-1.667 1.222-2.89 2.667-2.89 1.444 0 2.666 1.112 2.666 2.89 0 1.666-1.222 2.889-2.666 2.889zM65.333 24.23c-2.666 0-4.777 2-4.777 4.778a4.742 4.742 0 004.777 4.777c2.667 0 4.778-2 4.778-4.777 0-2.89-2.111-4.778-4.778-4.778zm0 7.555c-1.444 0-2.666-1.222-2.666-2.888 0-1.667 1.222-2.89 2.666-2.89 1.445 0 2.667 1.112 2.667 2.89 0 1.666-1.222 2.889-2.667 2.889zM53 25.675v2h4.778c-.111 1.11-.556 2-1.111 2.555-.667.667-1.778 1.444-3.667 1.444-3 0-5.222-2.333-5.222-5.333S50.11 21.008 53 21.008c1.556 0 2.778.666 3.667 1.444l1.444-1.444c-1.222-1.111-2.778-2-5-2-4 0-7.444 3.333-7.444 7.333s3.444 7.333 7.444 7.333c2.222 0 3.778-.666 5.111-2.11C59.556 30.23 60 28.34 60 26.896c0-.445 0-.89-.111-1.223H53zm50.444 1.555c-.444-1.111-1.555-3-4-3C97 24.23 95 26.119 95 29.008c0 2.666 2 4.777 4.667 4.777 2.111 0 3.444-1.333 3.889-2.11L102 30.562c-.556.778-1.222 1.334-2.333 1.334-1.112 0-1.778-.445-2.334-1.445l6.334-2.667-.223-.555zM97 28.785c0-1.777 1.444-2.777 2.444-2.777.778 0 1.556.444 1.778 1L97 28.785zm-5.222 4.556h2.11V19.452h-2.11v13.89zm-3.334-8.111c-.555-.556-1.444-1.111-2.555-1.111-2.334 0-4.556 2.111-4.556 4.778 0 2.666 2.111 4.666 4.556 4.666 1.111 0 2-.555 2.444-1.11h.111v.666c0 1.778-1 2.778-2.555 2.778-1.222 0-2.111-.89-2.334-1.667l-1.777.778c.555 1.222 1.889 2.777 4.222 2.777 2.444 0 4.444-1.444 4.444-4.888v-8.445h-2v.778zM86 31.785c-1.445 0-2.667-1.222-2.667-2.888 0-1.667 1.222-2.89 2.667-2.89 1.444 0 2.555 1.223 2.555 2.89 0 1.666-1.11 2.889-2.555 2.889zm27.111-12.333h-5v13.89h2.111v-5.223h2.889c2.333 0 4.556-1.667 4.556-4.333 0-2.667-2.223-4.334-4.556-4.334zm.111 6.667h-3V21.34h3c1.556 0 2.445 1.333 2.445 2.333-.112 1.223-1 2.445-2.445 2.445zm12.778-2c-1.556 0-3.111.666-3.667 2.111l1.889.778c.445-.778 1.111-1 1.889-1 1.111 0 2.111.666 2.222 1.777v.112c-.333-.223-1.222-.556-2.111-.556-2 0-4 1.111-4 3.111 0 1.89 1.667 3.111 3.445 3.111 1.444 0 2.111-.666 2.666-1.333h.111v1.111h2v-5.333c-.222-2.445-2.111-3.89-4.444-3.89zm-.222 7.666c-.667 0-1.667-.333-1.667-1.222 0-1.11 1.222-1.444 2.222-1.444.889 0 1.334.222 1.889.444-.222 1.334-1.333 2.223-2.444 2.223zm11.666-7.333l-2.333 6H135l-2.445-6h-2.222L134 32.897l-2.111 4.666H134l5.667-13.11h-2.223zm-18.666 8.89h2.111v-13.89h-2.111v13.89z" fill="#fff"></path><path d="M11.556 8.341c-.334.333-.445.889-.445 1.556v24.555c0 .667.222 1.222.556 1.556l.11.11 13.779-13.777v-.222l-14-13.778z" fill="url(#prefix__paint0_linear)"></path><path d="M30 27.008l-4.556-4.556v-.333L30 17.563l.111.111 5.445 3.111c1.555.89 1.555 2.334 0 3.223l-5.556 3z" fill="url(#prefix__paint1_linear)"></path><path d="M30.111 26.897l-4.666-4.667-13.89 13.889c.556.556 1.334.556 2.334.111l16.222-9.333z" fill="url(#prefix__paint2_linear)"></path><path d="M30.111 17.563L13.89 8.341c-1-.555-1.778-.444-2.333.111L25.444 22.23l4.666-4.667z" fill="url(#prefix__paint3_linear)"></path><path opacity="0.2" d="M30 26.786l-16.111 9.11c-.889.556-1.667.445-2.222 0l-.111.112.11.11c.556.445 1.334.556 2.223 0L30 26.787z" fill="#000"></path><path opacity="0.12" d="M11.556 35.897c-.334-.334-.445-.89-.445-1.556v.111c0 .667.222 1.223.556 1.556v-.111h-.111zm24-12.223L30 26.786l.111.11 5.445-3.11c.777-.445 1.11-1 1.11-1.556 0 .556-.444 1-1.11 1.444z" fill="#000"></path><path opacity="0.25" d="M13.889 8.452l21.667 12.334c.666.444 1.11.888 1.11 1.444 0-.556-.333-1.111-1.11-1.556L13.889 8.341c-1.556-.889-2.778-.222-2.778 1.556v.11c0-1.666 1.222-2.444 2.778-1.555z" fill="#fff"></path></g><defs><linearGradient id="prefix__paint0_linear" x1="24.222" y1="9.686" x2="5.574" y2="28.332" gradientUnits="userSpaceOnUse"><stop stop-color="#00A0FF"></stop><stop offset="0.007" stop-color="#00A1FF"></stop><stop offset="0.26" stop-color="#00BEFF"></stop><stop offset="0.512" stop-color="#00D2FF"></stop><stop offset="0.76" stop-color="#00DFFF"></stop><stop offset="1" stop-color="#00E3FF"></stop></linearGradient><linearGradient id="prefix__paint1_linear" x1="37.593" y1="22.231" x2="10.708" y2="22.231" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE000"></stop><stop offset="0.409" stop-color="#FFBD00"></stop><stop offset="0.775" stop-color="orange"></stop><stop offset="1" stop-color="#FF9C00"></stop></linearGradient><linearGradient id="prefix__paint2_linear" x1="27.586" y1="24.781" x2="2.299" y2="50.068" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3A44"></stop><stop offset="1" stop-color="#C31162"></stop></linearGradient><linearGradient id="prefix__paint3_linear" x1="8.108" y1="0.203" x2="19.4" y2="11.496" gradientUnits="userSpaceOnUse"><stop stop-color="#32A071"></stop><stop offset="0.069" stop-color="#2DA771"></stop><stop offset="0.476" stop-color="#15CF74"></stop><stop offset="0.801" stop-color="#06E775"></stop><stop offset="1" stop-color="#00F076"></stop></linearGradient><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h150v44.46H0z"></path></clipPath></defs></svg></Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2024 Fordland Fitness. All rights reserved</Text>
          {/* <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack> */}
        </Container>
      </Box>
    </Box>
  )
}

export {};