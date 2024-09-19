import React from 'react'

const AccountActions = () => {
    const buttonInfo = {
        addAccount: {
            buttonName: 'Add Account',
            buttonClass: 'fa-solid fa-plus',
        },
        signOut: {
            buttonName: 'Sign Out',
            buttonClass: 'fa-solid fa-right-from-bracket',
        },
        manageAccount: {
            buttonName: 'Manage Account'
        }
    }

    const linksInfo = {
        privacyPolicy: 'Privacy Policy',
        terms: 'Terms of Service',
    }
    return (
        <>
            <Buttons name={buttonInfo.manageAccount.buttonName} />
            <div>
                <Buttons name={buttonInfo.addAccount.buttonName} iconName={buttonInfo.addAccount.buttonClass} />
                <Buttons name={buttonInfo.addAccount.buttonName} iconName={buttonInfo.addAccount.buttonClass} />
            </div>
            <div>
                <Links name={linksInfo.privacyPolicy} />
                <Links name={linksInfo.terms} />
            </div>
        </>
    )
}

export default AccountActions