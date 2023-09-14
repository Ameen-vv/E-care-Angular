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
   loader:boolean = true;
   private userService = inject(UserService);
  
  ngOnInit(): void {
    this.loader = true;
      this.getWalletSub = this.userService.getWallet().subscribe(
        (response)=>{
          this.wallet = response.data;
          this.loader = false;
        },
        ()=>this.loader = false
        )
  }

  ngOnDestroy(): void {
      this.getWalletSub?.unsubscribe();
  }
}
