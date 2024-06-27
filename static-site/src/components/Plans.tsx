'use client'

import {
  Box,
  Button,
  Divider,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

const dailyOptions = [
  { id: 1, desc: 'No Contract' },
  { id: 2, desc: 'Full Day Pass' },
]

const monthlyOptions = [
    {id: 1, desc: 'No Contract'},
    {id: 2, desc: 'Auto Renewal'},
]

const sixMonthContractOptions = [
    {id: 1, desc: 'Contract Secured'},
    {id: 2, desc: 'Auto Renewal'},
]

const yearLongContractOptions = [
    {id: 1, desc: 'Contract Secured'},
    {id: 2, desc: 'Auto Renewal'},
    {id: 4, desc: 'Best Value'}
]

interface PackageTierProps {
  title: string
  options: Array<{ id: number; desc: string }>
  typePlan: string
  href?: string
  checked?: boolean
}
const PackageTier = ({ title, options, typePlan, href = "#", checked = false }: PackageTierProps) => {
  const colorTextLight = checked ? 'white' : 'blue.600'
  const bgColorLight = checked ? 'blue.400' : 'gray.300'

  const colorTextDark = checked ? 'white' : 'blue.500'
  const bgColorDark = checked ? 'blue.400' : 'gray.300'

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}>
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'lg'}>{typePlan}</Heading>
      <Stack>
        <Link href={href}>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
          Get Started
        </Button>
        </Link>
      </Stack>
    </Stack>
  )
}
const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} width="full">
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}>
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}>
            <Heading size={'lg'}>
              The Right Plan <Text color="blue.400">For You</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}>
            <Text textAlign={'center'} textDecoration={"underline"} fontSize={"1.1em"}>
              $60 Joining Fee applies to all but the Daily Plan
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Daily Plan'} typePlan="$5.00/Day" options={dailyOptions} />
        <Divider />
        <PackageTier title={'Month to Month'} typePlan="$45.00/Month" options={monthlyOptions} />
        <Divider />
        <PackageTier title={'6 Month Plan'} typePlan="$40.00/Month" options={sixMonthContractOptions} />
        <Divider />
        <PackageTier title={'12 Month Plan'} typePlan="$35.00/Month" options={yearLongContractOptions} />
      </Stack>
    </Box>
  )
}

export default ThreeTierPricingHorizontal;