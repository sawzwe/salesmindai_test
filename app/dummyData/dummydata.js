const dummyData = [
    {
        id: 1,
        pfp_url: '/assets/pfp_user.png',
        unreadMessages: 1,
        linkedIn_url: 'https://www.linkedin.com/in/saw-zwe/',
        name: 'Hiro Joyce',
        role: 'Senior UX/UI Designer',
        tag: 'Qualified Lead',
        company: 'TTB Bank',
        location: 'Bangkok',
        details: 'UX/UI designer in Bangkok',
        lastMessage: {
            text: 'Looking forward to our next meeting!',
            time: '08:17 AM',
            date: 'Jan 10',
        },
        campaignId: 8,
        campaign: 'Summer UX Con 2021',
        sender: {
            name: 'Alison Brie',
            image: '/assets/pfp_sender.png',
        },
        status: {
            unread: false,
            unreplied: false,
            drafting: true,
        },
        selected: false,
        conversation: [            {
            messageId: 2015,
            senderId: 1,
            sender: 'Hiro Joyce',
            text: 'Good morning! About last time, when should I start',
            timestamp: '2023-01-14T09:00:00Z',
          },
          {
            messageId: 2016,
            senderId: 999,
            sender: 'Julien Gadea',
            text: 'Morning! You can start on the first day of the week, this month.',
            timestamp: '2023-01-14T09:05:00Z',
          },
          {
            messageId: 2017,
            senderId: 1,
            sender: 'Hiro Joyce',
            text: 'Thanks, Can you make set up a meeting for this afternoon to ask further details.',
            timestamp: '2023-01-14T09:07:00Z',
          },]

    },
    {
        id: 2,
        pfp_url: '/assets/pfp_user.png',
        linkedIn_url: 'https://www.linkedin.com/in/saw-zwe/',
        unreadMessages: 24,
        name: 'Jane Doe',
        company: 'Lineman',
        location: 'Bangkok',
        role: 'Product Manager',
        tag: 'Interested',
        details: 'Product manager at Tech Solutions',
        lastMessage: {
            text: 'Can you send over the files?',
            time: '19:42 AM',
            date: 'Jan 9',
        },
        campaignId: 16,
        campaign: 'Product Launch Q1 2023',
        sender: {
            name: 'Dave Franco',
            image: '/assets/pfp_sender.png',
        },
        status: {
            unread: true,
            unreplied: true,
            drafting: false,
        },
        selected: false,
        conversation: [{
            messageId: 2015,
            senderId: 2,
            sender: 'Jane Doe',
            text: 'Good morning!',
            timestamp: '2023-01-14T09:00:00Z',
          },
          {
            messageId: 2015,
            senderId: 2,
            sender: 'Jane Doe',
            text: 'When is the deadline for the assessment?',
            timestamp: '2023-01-14T09:00:00Z',
          },
        
        ]

    },
    {
        id: 3,
        pfp_url: '/assets/pfp_user.png',
        linkedIn_url: 'https://www.linkedin.com/in/saw-zwe/',
        unreadMessages: 6,
        name: 'Peter Park',
        company: 'Agoda',
        location: 'New York',
        role: 'Developer',
        tag: 'Not Interested',
        details: 'Product manager at Tech Solutions',
        lastMessage: {
            text: 'Can you send over the files?',
            time: '09:32 AM',
            date: 'Jan 9',
        },
        campaignId: 1,
        campaign: 'Product Launch Q1 2021 B',
        sender: {
            name: 'Dave Franco',
            image: '/assets/pfp_sender.png',
        },
        status: {
            unread: true,
            unreplied: false,
            drafting: false,
        },
        selected: false,
        conversation: []

    },
    {
        id: 4,
        company: 'TTB Bank',
        location: 'Bangkok',
        unreadMessages: 8,
        pfp_url: '/assets/pfp_user.png',
        linkedIn_url: 'https://www.linkedin.com/in/saw-zwe/',
        name: 'Saw Zwe',
        role: 'Full Stack Developer',
        tag: 'Interested',
        details: 'Product manager at Tech Solutions',
        lastMessage: {
            text: 'Can you send over the files?',
            time: '09:54 AM',
            date: 'Jan 9',
        },
        campaignId: 1,
        campaign: 'Product Launch Q1 2021',
        sender: {
            name: 'Dave Franco',
            image: '/assets/pfp_sender.png',
        },
        status: {
            unread: true,
            unreplied: true,
            drafting: false,
        },
        selected: false,
        conversation: []

    },
    {
        id: 5,
        pfp_url: '/assets/pfp_user.png',
        name: 'Hiro Taka',
        unreadMessages: 0,
        role: 'Senior UX/UI Designer',
        linkedIn_url: 'https://www.linkedin.com/in/saw-zwe/',
        tag: 'Referral',
        company: 'TTB Bank',
        location: 'Bangkok',
        details: 'UX/UI designer in Bangkok',
        lastMessage: {
            text: 'Looking forward to our next meeting!',
            time: '08:17 AM',
            date: 'Jan 10',
        },
        campaignId: 8,
        campaign: 'Summer UX Con 2021',
        sender: {
            name: 'Alison Brie',
            image: '/assets/pfp_sender.png',
        },
        status: {
            unread: false,
            unreplied: false,
            drafting: true,
        },
        selected: false,
        conversation: []

    },
    {
        id: 6,
        pfp_url: '/assets/pfp_user.png',
        linkedIn_url: 'https://www.linkedin.com/in/saw-zwe/',
        name: 'Jane Doe II',
        company: 'Lineman',
        location: 'Bangkok',
        unreadMessages: 1,
        role: 'Product Manager',
        tag: 'Interested',
        details: 'Product manager at Tech Solutions',
        lastMessage: {
            text: 'Can you send over the files?',
            time: '19:42 AM',
            date: 'Jan 9',
        },
        campaignId: 16,
        campaign: 'Product Launch Q1 2023',
        sender: {
            name: 'Dave Franco',
            image: '/assets/pfp_sender.png',
        },
        status: {
            unread: true,
            unreplied: true,
            drafting: false,
        },
        selected: false,
        conversation: []

    },
    {
        id: 7,
        pfp_url: '/assets/pfp_user.png',
        linkedIn_url: 'https://www.linkedin.com/in/saw-zwe/',
        name: 'Peter Strange',
        company: 'Agoda',
        location: 'New York',
        unreadMessages: 6,
        role: 'Developer',
        tag: 'Not Interested',
        details: 'Product manager at Tech Solutions',
        lastMessage: {
            text: 'Can you send over the files?',
            time: '09:32 AM',
            date: 'Jan 9',
        },
        campaignId: 1,
        campaign: 'Product Launch Q1 2021 B',
        sender: {
            name: 'Dave Franco',
            image: '/assets/pfp_sender.png',
        },
        status: {
            unread: true,
            unreplied: false,
            drafting: false,
        },
        selected: false,
        conversation: []

    },
    {
        id: 8,
        company: 'TTB Bank',
        location: 'Bangkok',
        pfp_url: '/assets/pfp_user.png',
        linkedIn_url: 'https://www.linkedin.com/in/saw-zwe/',
        name: 'Saw Thet',
        unreadMessages: 9,
        role: 'Full Stack Developer',
        tag: 'Referral',
        details: 'Product manager at Tech Solutions',
        lastMessage: {
            text: 'Can you send over the files?',
            time: '09:54 AM',
            date: 'Jan 9',
        },
        campaignId: 1,
        campaign: 'Product Launch Q1 2021',
        sender: {
            name: 'Dave Franco',
            image: '/assets/pfp_sender.png',
        },
        status: {
            unread: true,
            unreplied: true,
            drafting: false,
        },
        selected: false,
        conversation: []

    },
    {
        id:11,
        pfp_url: '/assets/pfp_user.png',
        linkedIn_url: 'https://www.linkedin.com/in/saw-zwe/',
        name: 'Tony Stark',
        unreadMessages: 2,
        company: 'Agoda',
        location: 'New York',
        role: 'Developer',
        tag: 'Qualified Lead',
        details: 'Product manager at Tech Solutions',
        lastMessage: {
            text: 'Can you send over the files?',
            time: '09:32 AM',
            date: 'Jan 9',
        },
        campaignId: 16,
        campaign: 'Civil War',
        sender: {
            name: 'Dave Franco',
            image: '/assets/pfp_sender.png',
        },
        status: {
            unread: true,
            unreplied: false,
            drafting: false,
        },
        selected: false,
        conversation: []
    },
    {
        id: 16,
        company: 'TTB Bank',
        location: 'Bangkok',
        unreadMessages: 6,
        pfp_url: '/assets/pfp_user.png',
        name: 'Steve Rogers',
        role: 'Full Stack Developer',
        linkedIn_url: 'https://www.linkedin.com/in/saw-zwe/',
        tag: 'Referral',
        details: 'Product manager at Tech Solutions',
        lastMessage: {
            text: 'Can you send over the files?',
            time: '09:54 AM',
            date: 'Jan 9',
        },
        campaignId: 16,
        campaign: 'Civil War',
        sender: {
            name: 'Julien Gadea',
            image: '/assets/pfp_sender.png',
        },
        status: {
            unread: false,
            unreplied: false,
            drafting: false,
        },
        selected: false,
        conversation: [
            {
              messageId: 1001,
              senderId: 16,
              sender: 'Steve Rogers',
              text: 'Good morning! Did you see the latest project brief?',
              timestamp: '2023-01-14T09:00:00Z',
            },
            {
              messageId: 1002,
              senderId: 999,
              sender: 'Julien Gadea',
              text: 'Morning! Yes, I did. We need to align with the marketing team.',
              timestamp: '2023-01-14T09:05:00Z',
            },
            {
              messageId: 1003,
              senderId: 16,
              sender: 'Steve Rogers',
              text: 'Agreed. Setting up a meeting for this afternoon.',
              timestamp: '2023-01-14T09:07:00Z',
            },
            {
              messageId: 1004,
              senderId: 999,
              sender: 'Julien Gadea',
              text: 'Perfect. Let me know the time.',
              timestamp: '2023-01-14T09:15:00Z',
            },
            {
              messageId: 1005,
              senderId: 16,
              sender: 'Steve Rogers',
              text: 'Will do. Meanwhile, let’s start on the initial designs.',
              timestamp: '2023-01-14T10:30:00Z',
            },
            {
              messageId: 1006,
              senderId: 999,
              sender: 'Julien Gadea',
              text: 'I’m on it! Will share the drafts by lunch.',
              timestamp: '2023-01-14T10:45:00Z',
            },
            {
              messageId: 1007,
              senderId: 16,
              sender: 'Steve Rogers',
              text: 'The meeting is at 3 PM. Check your calendar for the invite.',
              timestamp: '2023-01-15T08:00:00Z',
            },
            {
              messageId: 1008,
              senderId: 999,
              sender: 'Julien Gadea',
              text: 'Got it. Also, the draft designs are in your inbox.',
              timestamp: '2023-01-15T08:15:00Z',
            },
            {
              messageId: 1009,
              senderId: 16,
              sender: 'Steve Rogers',
              text: 'Great work on the drafts. I’ve sent some feedback.',
              timestamp: '2023-01-15T09:30:00Z',
            },
            {
              messageId: 1010,
              senderId: 999,
              sender: 'Julien Gadea',
              text: 'Thanks! I’ll apply the changes before the meeting.',
              timestamp: '2023-01-15T09:45:00Z',
            },
          ]
    },
];

export default dummyData;
