import React from 'react'
// import { Inter } from '@next/font/google';
import Images from '../components/atoms/Images';

// const inter = Inter({ subsets: ['latin'] });

const page = () => {
  const emailData = [
    {
      id: 1,
      sender: "john@example.com",
      subject: "Meeting Reminder",
      snippet: "Don't forget the meeting at 10 AM tomorrow.",
      date: "Sep 18, 2024",
    },
    {
      id: 2,
      sender: "doe@example.com",
      subject: "Weekly Report",
      snippet: "Here is the weekly report for your review.",
      date: "Sep 17, 2024",
    },
    {
      id: 3,
      sender: "jane@example.com",
      subject: "Invoice Due",
      snippet: "Please see the attached invoice. Payment is due by end of the week.",
      date: "Sep 15, 2024",
    },
    {
      id: 4,
      sender: "no-reply@newsletter.com",
      subject: "Your Subscription Update",
      snippet: "You are subscribed to our weekly newsletter. Here's the latest...",
      date: "Sep 14, 2024",
    },
    {
      id: 5,
      sender: "support@tech.com",
      subject: "Support Ticket Update",
      snippet: "Your support ticket has been updated. Please review the details.",
      date: "Sep 13, 2024",
    },
    {
      id: 6,
      sender: "john@example.com",
      subject: "Meeting Reminder",
      snippet: "Don't forget the meeting at 10 AM tomorrow.",
      date: "Sep 18, 2024",
    },
    {
      id: 7,
      sender: "doe@example.com",
      subject: "Weekly Report",
      snippet: "Here is the weekly report for your review.",
      date: "Sep 17, 2024",
    },
    {
      id: 8,
      sender: "jane@example.com",
      subject: "Invoice Due",
      snippet: "Please see the attached invoice. Payment is due by end of the week.",
      date: "Sep 15, 2024",
    },
    {
      id: 9,
      sender: "no-reply@newsletter.com",
      subject: "Your Subscription Update",
      snippet: "You are subscribed to our weekly newsletter. Here's the latest...",
      date: "Sep 14, 2024",
    },
    {
      id: 10,
      sender: "support@tech.com",
      subject: "Support Ticket Update",
      snippet: "Your support ticket has been updated. Please review the details.",
      date: "Sep 13, 2024",
    },
  ];
  return (
    <div className=''>
      <div style={{ padding: '20px' }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "0 auto",
            fontSize: "14px",
            paddingTop: "-100px",
          }}
        >
          <tbody>
            {emailData.map((email) => (
              <tr key={email.id} className='flex gap-2'>
                <td className='flex gap-2' style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <input type="checkbox" />
                  <Images
                    url='/icons/starred.png'
                    alt='starred'
                    width={15}
                    height={15}
                  />
                  {email.sender}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <strong>
                    {email.subject}
                  </strong>
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{email.snippet}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{email.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page