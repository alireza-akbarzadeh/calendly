import { useControllableState } from '@radix-ui/react-use-controllable-state'
import { useState } from 'react'
import { LuCheck, LuChevronsUpDown } from 'react-icons/lu'
import type { PropsWithChildren } from 'react'

import { Button } from '~/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '~/components/ui/command'
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '~/components/ui/drawer'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { ScrollArea } from '~/components/ui/scroll-area'
import { useIsMobile } from '~/hooks/use-is-mobile'
import { createContextFactory, cx } from '~/libs/utils'

type ComboboxOption = {
  label: string
  value: string
}

type ComboboxContext = {
  selected?: ComboboxOption['value']
  onSelectChange: (value: ComboboxOption['value']) => void
  selectedOption?: ComboboxOption
  open: boolean
  setOpen: (value: boolean) => void
  search: string
  setSearch: (value: string) => void
  filteredOptions: ComboboxOption[]
}

type ComboboxProps = {
  options: ComboboxOption[]
  selected?: ComboboxOption['value']
  onSelectChange?: (value: ComboboxOption['value']) => void
  defaultSelected?: ComboboxOption['value']
  defaultOpen?: boolean
  disabled?: boolean
}

const [ContextProvider, useContext] = createContextFactory<ComboboxContext>()

function Combobox({ options, disabled, ...props }: ComboboxProps) {
  const [selected, onSelectChange] = useControllableState({
    prop: props.selected,
    onChange: props.onSelectChange,
    defaultProp: props.defaultSelected,
  })

  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const selectedOption = options.find((option) => option.value === selected)
  const filteredOptions = comboboxFilter(options, search)

  const isMobile = useIsMobile()
  const DynamicView = isMobile ? MobileView : DesktopView

  const context: ComboboxContext = {
    selected,
    onSelectChange,
    selectedOption,
    open,
    setOpen,
    search,
    setSearch,
    filteredOptions,
  }

  return (
    <ContextProvider value={context}>
      <DynamicView>
        <Button
          role='combobox'
          variant='outline'
          disabled={disabled}
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          <span className='select-none'>
            {selectedOption ? selectedOption.label : 'Select option...'}
          </span>
          <LuChevronsUpDown className='ml-2 size-4 shrink-0 opacity-50' />
        </Button>
      </DynamicView>
    </ContextProvider>
  )
}

function DesktopView({ children }: PropsWithChildren) {
  const context = useContext()

  return (
    <Popover open={context.open} onOpenChange={context.setOpen}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <ComboboxContent />
      </PopoverContent>
    </Popover>
  )
}

function MobileView({ children }: PropsWithChildren) {
  const context = useContext()

  return (
    <Drawer open={context.open} onOpenChange={context.setOpen}>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className='sr-only' />
        <div className='mt-4 border-t'>
          <ComboboxContent />
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function ComboboxContent() {
  const context = useContext()

  return (
    <Command shouldFilter={false}>
      <CommandInput
        value={context.search}
        onValueChange={context.setSearch}
        placeholder='Search option...'
      />
      <CommandList className='p-1'>
        <ScrollArea className='h-72'>
          <CommandEmpty>
            No option found.
          </CommandEmpty>
          <CommandGroup>
            {context.filteredOptions.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  context.onSelectChange(currentValue === context.selected ? '' : currentValue)
                  context.setOpen(false)
                  context.setSearch('')
                }}
              >
                <LuCheck
                  className={cx(
                    'mr-2 size-4',
                    context.selected === option.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </Command>
  )
}

function comboboxFilter(options: ComboboxOption[], search: string) {
  return options.filter((option) => option.label.toLowerCase().includes(search.trim().toLowerCase()))
}

export { Combobox }
export type { ComboboxOption, ComboboxProps }
