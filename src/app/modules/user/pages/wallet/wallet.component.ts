import { Component,OnInit,OnDestroy, inject } from '@angular/core';
import { WalletModel } from '../../core/models/userModels';
import { Subscription } from 'rxjs';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit,OnDestroy {
  
   wallet!:WalletModel;
   getWalletSub!:Subscription;
   private userService = inject(UserService);
  
  ngOnInit(): void {
      this.getWalletSub = this.userService.getWallet().subscribe(
        (response)=>{
          this.wallet = response.data;
        }
        )
  }

  ngOnDestroy(): void {
      this.getWalletSub?.unsubscribe();
  }
}
