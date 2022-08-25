export const menuItemsList = [
        {
            title: 'home',
            url: '/',

        },
        {
            title: 'info ⌵ ',
            url: '/faq',
            submenu: [
                {
                    title: 'Disks',
                    url: 'faq#algemeen',
                },
                {
                    title: 'Gebruik',
                    url: 'faq#gebruik',
                },
                {
                    title: 'Kiezen',
                    url: 'faq#kiezen',
                },
                {
                    title: 'Problemen',
                    url: 'faq#problemen',
                },
            ],
        },
        {
            title: 'vergelijken ⌵',
            url: '/vergelijk-meerdere-menstruatiedisks',
            submenu: [
                {
                    title: 'vind jouw disk',
                    url: 'diskquiz',
                },
                {
                    title: 'disks vergelijken',
                    url: 'vergelijk-meerdere-menstruatiedisks',
                },
            ],

        },

        {
            title: 'contact',
            url: '/contact',
        },
    ]
;