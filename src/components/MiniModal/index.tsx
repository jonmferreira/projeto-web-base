import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"

interface MiniModalProps {
    miniModalVisible: boolean
    setMiniModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    reset: any
    onClose: () => void
}

export function MiniModal({miniModalVisible, setMiniModalVisible, reset, onClose }: MiniModalProps) {
    return (
        <Dialog 
            header='Atenção!' 
            visible={miniModalVisible} 
            onHide={() => setMiniModalVisible(false)}
        >
            <div className="flex flex-column align-items-center -mt-4">
                <h3 className="w-8 text-center">Tem certeza que deseja fechar o formulário? Existem campos preenchidos!</h3>
                <div className="flex gap-2">
                    <Button
                        onClick={() => setMiniModalVisible(false)}
                        label="Cancelar"
                    />
                    <Button
                        onClick={() => {
                            reset(),
                            onClose()
                            setMiniModalVisible(false)
                        }}
                        label="Sim, tenho certeza"
                    />

                </div>
            </div>
        </Dialog>

    )
}