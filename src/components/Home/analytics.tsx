'use client'
import { useEffect, useState } from 'react';
import { calculateOpeningRate, calculateSendingRate } from '@/action/emailQueue/getMail.emailqueue';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Analytics = () => {
  const [openingRate, setOpeningRate] = useState<number>(0);
  const [sendingRate, setSendingRate] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const opening = await calculateOpeningRate();
        const sending = await calculateSendingRate();
        setOpeningRate(opening);
        setSendingRate(sending);
      } catch (error) {
        console.error('Error fetching rates:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full p-4 flex flex-row gap-4 justify-between">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>{openingRate !== null ? openingRate : 'Loading...'}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            {sendingRate !== null ? sendingRate : 'Loading...'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Analytics;
