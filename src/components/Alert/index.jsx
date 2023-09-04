/* eslint-disable prettier/prettier */
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import React from 'react'
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  Button,
  Wrap,
} from './styles'

export function AlertDialog({ onClick, children }) {
  return (
    <Wrap>
      <AlertDialogPrimitive.Root>
        <AlertDialogPrimitive.Trigger asChild>
          {children }
        </AlertDialogPrimitive.Trigger>
        <AlertDialogPrimitive.Portal>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Isso deletará este prato permanentemente
            </AlertDialogDescription>
            <div
              style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}
            >
              <AlertDialogPrimitive.Cancel asChild >
                <Button> Cancelar</Button>
              </AlertDialogPrimitive.Cancel>
              <AlertDialogPrimitive.Action asChild >
                <Button onClick={onClick}>Sim, deletar</Button>
              </AlertDialogPrimitive.Action>
            </div>
          </AlertDialogContent>
        </AlertDialogPrimitive.Portal>
      </AlertDialogPrimitive.Root>
    </Wrap>
  )
}
