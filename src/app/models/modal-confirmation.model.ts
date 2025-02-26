export interface IModalConfirmation {
  message: string;
  actionType: 'alert' | 'success' | 'warning';
  actionText?: string;
  actionTitle?: string;
}
