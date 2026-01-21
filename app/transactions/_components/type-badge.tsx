import { Badge } from "@/components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-green/10 font-bold text-green hover:bg-green">
        <CircleIcon className="mr-2 fill-green" size={12} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 font-bold text-danger">
        <CircleIcon className="mr-2 fill-danger" size={12} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-white/10 font-bold text-white">
      <CircleIcon className="mr-2 fill-white" size={12} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
