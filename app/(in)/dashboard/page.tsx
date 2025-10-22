import React from 'react'
import { stats } from '@/constants'
import RoleCard from '@/components/mine/RoleCard'
import BarChart from '@/components/mine/Barchart'
import { DashboardCalendar } from '@/components/mine/DashboardCalendar'
import DonutChart from '@/components/mine/DonutChart'
import FinanceLineChart from '@/components/mine/FinanceLineChart'

const Dashboard = () => {

  return (
    <main className=' h-full max-w-[100vw]  w-full   overflow-y-scroll pt-2 '>


        <div className='flex  w-full justify-between '>
          <div className='flex flex-col flex-1'>
                  <div className='  flex justify-between gap-1 pr-2 pb-2 flex-1 max-h-32 w-full '>
                <RoleCard role="Admins" amount={stats.admins}   textColor="text-white" bgColor="verde-claro"/>
                <RoleCard role="Profesores" amount={stats.teachers}  textColor="text-white" bgColor="verde-suave"/>
                <RoleCard role="Estudiantes" amount={stats.students}  textColor="text-white" bgColor="beige"/>
                <RoleCard role="Tutores" amount={stats.parents}  textColor="text-white" bgColor="marron-suave"/>
                </div>
                <div className='flex w-full max-h-80' >
                  <div className=' w-80 p-8 rounded-3xl  mr-2 shadow-xl  border  '>
                  <DonutChart />
                </div>
                    
              <div className=' flex-1  rounded-3xl shadow-xl border flex justify-center items-center   '>
                <BarChart />
                </div>
                  </div>

                   <div className='  mb-24 mt-3  '>
            <FinanceLineChart className='w-full' />
          </div>
          </div>
        <div className='  w-[33.33%]  h-[100vh] ml-2 '>
          <DashboardCalendar />
          </div>
        </div>


   
        
       
        
        
    </main>
  )
}

export default Dashboard