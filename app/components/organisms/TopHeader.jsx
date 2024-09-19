import React from 'react'
import InputForm from '../molecules/InputForm'
import MainBar from '../molecules/MainBar'
import TopBarIcons from '../molecules/TopBarIcons'
import SettingIcons from '../molecules/SettingIcons'

const TopHeader = () => {
    return (
      <header className="">
        <div className="">
          <div className="">
            <div className="flex top_header">
              <InputForm />
              <SettingIcons />
            </div>
            <div className="">
              <TopBarIcons />
            </div>
          </div>
        </div>
        <MainBar />
      </header>
    )
}

export default TopHeader